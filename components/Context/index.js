import React, {Component} from 'react';
import {Sections} from '../Data/Sections';
// import {Projects} from '../Data/Projects';
// import axios from 'axios';

const ScottBrabazonContext = React.createContext();

export class Provider extends Component {

   state = {
      projects: []
   }

   componentDidMount() {

      const query = `{
         projectCollection {
            items {
               name
               href
               img {
                 url
               }
               section
               lightboxCollection {
                 items {
                   url
                 }
               }
             }
         }
      }`

      window.fetch("https://graphql.contentful.com/content/v1/spaces/s80bj3lhgmoj?access_token=ABIoJPTjbVtx3lsnXu_0CG1_3d0MFRSHqh8UftRuWKw", {
         method: "POST",
         headers: {
            "Content-Type": "application/json", 
         },
         body: JSON.stringify({query}),
      })
      .then(response => response.json())
      .then(json => {
            this.setState({
               projects: json.data.projectCollection.items,
               lightboxCollection: false,
            });
         },
         (error) => {
            this.setState({
               projects: null,
            });
         }
      )      
   }

   openLightbox = (event, index, lightbox) => {
      if (lightbox.items.length !== 0) {
         event.preventDefault();
         this.setState( prevState => ({
            isOpen: prevState.projects[index].lightboxCollection.isOpen = true,
            photoIndex: prevState.projects[index].lightboxCollection.photoIndex = 0,
         }));
      }
      // trackOutboundLink('https://www.jacamo.co.uk/'); return true;
   }

   closeLightbox = (index) => {
      this.setState( prevState => ({
         isOpen: prevState.projects[index].lightboxCollection.isOpen = false
      }));
   }

   prevLightbox = (index, lightboxImages, photoIndex) => {
      this.setState( prevState => ({
         photoIndex: prevState.projects[index].lightboxCollection.photoIndex = (photoIndex + lightboxImages.length - 1) % lightboxImages.length
      }));
   }

   nextLightbox = (index, lightboxImages, photoIndex) => {
       this.setState( prevState => ({
         photoIndex: prevState.projects[index].lightboxCollection.photoIndex = (photoIndex + 1) % lightboxImages.length
      }));
   }

   render() {

      // Sort by name
      this.state.projects.sort(function(a, b) {
         var nameA = a.name.toUpperCase();
         var nameB = b.name.toUpperCase();
         if (nameA < nameB) {
            return -1;
         }
         if (nameA > nameB) {
            return 1;
         }
        // names must be equal
        return 0;
      });

      return (

         <ScottBrabazonContext.Provider value={{
            projects: this.state.projects,
            actions: {
               openLightbox: this.openLightbox,
               closeLightbox: this.closeLightbox,
               prevLightbox: this.prevLightbox,
               nextLightbox: this.nextLightbox
            }
         }}>
            {this.props.children}
         </ScottBrabazonContext.Provider>

      );
   }
}

export const Consumer = ScottBrabazonContext.Consumer;