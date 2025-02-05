import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useFadeLeft from '../hooks/useFadeLeft';

const HomeIntro = () => {

    useFadeLeft();

    return (
        <div className="grid-container fade-left">
            <div className="home-intro col-1">
                <Link href="/work" legacyBehavior passHref>
                    <a className="btn-primary">
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>
                        <span>work</span>
                    </a>
                </Link>

                <Link href="/about" legacyBehavior passHref>
                    <a className="btn-primary">
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>
                        <span>about</span>
                    </a>
                </Link>
            </div>
            <div className="home-intro intro">
                <Image 
                   src="/img/quote.svg" 
                   alt="Quote" 
                   className="quote"
                   width="50"
                   height="50"
                />
                <p>Hi. I&rsquo;m a frontend developer and designer based in the Northwest of England, passionate about creating websites that look great and work even better. I love turning ideas into engaging, user-friendly experiences with clean, responsive code. Whether you need a brand-new site or just a refresh, I&rsquo;m here to help. Let&rsquo;s team up and build something amazing!</p>
            </div>
        </div>
    );
}

export default HomeIntro;
