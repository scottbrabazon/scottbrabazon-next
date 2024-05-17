import GoogleMap from './GoogleMap';
import {Fragment} from 'react';

const Contact = () => {
   
   return (

      <Fragment>

         <div className="contact fade-in">

            <div className="about">

               <p>As an experienced frontend developer, I can offer the following services anywhere in the northwest of England. Get in touch to speak in more detail about your needs.</p>
               
               <div className="expertise">
                  <div className="expertise-col">
                     <h2>Tech</h2>
                     <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>GIT</li>
                        <li>Sass</li>
                        <li>Gulp</li>
                        <li>Animation (GSAP)</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>GraphQL</li>
                     </ul> 
                  </div>
                  <div className="expertise-col">
                     <h2>Platforms</h2>
                     <ul>
                        <li>Contentful</li>
                        <li>SilverStripe CMS</li>
                        <li>Aurora Commerce</li>
                        <li>Shopify</li>
                        <li>Craft</li>
                        <li>Monetate</li>
                        <li>Mailchilp</li>
                        <li>Campaign Monitor</li>
                        <li>Emarsys</li>
                     </ul>
                  </div>
                  <div className="expertise-col">
                     <h2>Software</h2>
                     <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe InDesign</li>
                        <li>Adobe After Effects</li>
                        <li>Microsoft Office</li>
                        <li>Figma</li>
                        <li>Final Cut Pro</li>
                        <li>Cinema 4D</li>
                     </ul>
                  </div>
               </div>
               <div className="contact-details">
                  <span>Phone:<br /></span><a href="tel:+447963657287"> +44 (0)796 365 7287</a><br />
                  <span>Email:<br /></span><a href="mailto:scott.brabazon@googlemail.com"> scott.brabazon@googlemail.com</a><br />
                  <span>LinkedIn:<br /></span><a href="https://www.linkedin.com/in/scottbrabazon/"> www.linkedin.com/in/scottbrabazon</a>
               </div>
            </div>

            <GoogleMap />

         </div>

      </Fragment>
   );
}

export default Contact;