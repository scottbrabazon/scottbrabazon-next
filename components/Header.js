import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useDrawLine from '../hooks/useDrawLine';
import useFadeRight from '../hooks/useFadeRight';

const Header = () => {
    const lineRef = useDrawLine();
    useFadeRight();
    const router = useRouter();
    const currentPage = router.pathname === '/' ? 'home' : router.pathname.split('/')[1];

    // State to track animation trigger
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Reset state immediately when route changes
        setIsActive(false);

        // Delay the animation to restart after reset
        const timeout = setTimeout(() => {
            setIsActive(true);
        }, 100);

        // Cleanup timeout to avoid memory leaks
        return () => clearTimeout(timeout);
    }, [router.pathname]); // Runs whenever the route changes

    return (
        <header className={`header grid-container ${currentPage}`}>
            <div className="content">
                <h2 className="small-caps">Scott Brabazon</h2>
                <h1>
                    <span className="fade-right">Designer <span className="serif">&</span></span><br />
                    <span className="bg-image-text fade-right"><span className="italic">Frontend</span> developer</span>
                </h1>
                <div className="line-container">
                    <div className="line" ref={lineRef}></div>
                </div>
            </div>

        </header>
    );
};

export default Header;