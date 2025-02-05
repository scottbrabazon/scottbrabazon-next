import Link from 'next/link';
import { Consumer } from "./Context";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import WorkThumbnail from "./WorkThumbnail";
import useHorizontalScroll from '../hooks/useHorizontalScroll';  // Import the custom hook

const FeaturedProjects = () => {
  // Use the custom hook
  useHorizontalScroll();

  return (
    <section className="featured-projects grid-container">
      <div className="content">
        <h2>Featured <br className="break-mobile" />projects</h2>
      </div>

      <div className="projects-container">
        <div className="inner-container">
          <Consumer>
            {({ projects, actions }) => {
              const filteredProjects = projects.filter((project) => project.featured === true);
              return (
                <>
                  {filteredProjects.map((project, index) => (
                    <WorkThumbnail
                      name={project.name}
                      href={project.href}
                      img={project.img?.url}
                      tag={project.projectTag?.join(", ")}
                      description={documentToReactComponents(
                        project.projectDescription.json
                      )}
                      lightbox={project.lightboxCollection}
                      key={index}
                      index={index}
                      openLightbox={actions.openLightbox}
                      closeLightbox={actions.closeLightbox}
                      prevLightbox={actions.prevLightbox}
                      nextLightbox={actions.nextLightbox}
                    />
                  ))}
                </>
              );
            }}
          </Consumer>

         <Link href="/work" legacyBehavior >
            <div className="view-all">
               <div className="view-all-container">
                  View all
               </div>
            </div>
         </Link>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
