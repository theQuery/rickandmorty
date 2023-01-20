import { useState, useEffect } from 'react';

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const newScrollPosition = window.scrollY;
        setScrollPosition(newScrollPosition);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollPosition;
}

export default useScrollPosition;