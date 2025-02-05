import Image from 'next/image';
import { useEffect, useRef } from 'react';
import useFadeLeft from '../hooks/useFadeLeft';

const AboutIntro = () => {

   useFadeLeft();

    return (
        <div className="grid-container fade-left">
            <div className="about-intro col-1">
                <div>
                    <p className="phone">phone: <a href="tel:+447963657287">+44 (0)796 365 7287</a></p>
                    <p className="linkedin">linkedin: <a href="https://www.linkedin.com/in/scottbrabazon/">view profile</a></p>
                    <p className="email">email: <a href="mailto:scott.brabazon@googlemail.com">scott.brabazon@googlemail.com</a></p>
                </div>
            </div>
            <div className="home-intro intro">
                <Image 
                   src="/img/quote.svg" 
                   alt="Quote" 
                   className="quote"
                   width="50"
                   height="50"
                />
                <p>I’m a frontend developer and designer with a passion for building websites that are as functional as they are visually striking. With experience in HTML, CSS, JavaScript and WordPress, I create custom websites that are fast, accessible, and easy to use. From user-friendly design to seamless performance, my goal is to build websites that help businesses stand out.
                </p>
            </div>
        </div>
    );
}

export default AboutIntro;
