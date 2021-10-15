import {Consumer} from './Context';
import GalleryThumbnail from './GalleryThumbnail';
import {useRouter} from 'next/router';
import BlogThumbnail from './BlogThumbnail';

const Gallery = ({newsposts, projects}) => {

   return (

      <div className="pageContainer">

         <div className="galleryContainer">

            <Consumer>

               {({projects, actions}) => (
                  <div className="gallery">
                     {projects.map( (project, index) =>
                        <GalleryThumbnail 
                           name={project.name}
                           href={project.href}
                           img={project.img.url}  
                           section={project.section}  
                           lightbox={project.lightboxCollection} 
                           key={index + 1}
                           index={index}
                           openLightbox={actions.openLightbox}
                           closeLightbox={actions.closeLightbox}
                           prevLightbox={actions.prevLightbox}
                           nextLightbox={actions.nextLightbox}

                        />
                     )}
                  </div>
               )}
            </Consumer>

         </div>

         <div className="sidebar">
            <div>
               <h2>You may like...</h2>
               {newsposts.filter((i, index) => (index < 2)).map((newspost, index) =>
                  <BlogThumbnail 
                     key={newspost.sys.id}
                     newspost={newspost}
                     index={index}
                  />
               )}
            </div>
         </div>

      </div>

   )
}

export default Gallery;