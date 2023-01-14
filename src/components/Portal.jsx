import '../styles/Portal.css';
import portal from '../assets/portal.gif';
import { useState } from 'react';
import { useBlur } from '../contexts/BlurProvider';

// Use this for the click sound effect:
// https://www.youtube.com/watch?v=l3JXzuX7mmA
function Portal({ text }) {
    const [isClicked, setIsClicked] = useState(false);
    const [isBlurred, setIsBlurred] = useBlur();

    const handleClick = () => {
        setIsBlurred(!isClicked);
        setIsClicked(isClicked => !isClicked);
    };

    return <div
        className={isClicked ? 'portal__clicked' : 'portal'}
        onClick={handleClick}
    >
        <div className={isClicked ? 'portal__raw-clicked' : 'portal__raw'}>
            <div className='portal__glow'></div>
            <img
                className='portal__image'
                src={portal}
                alt={text}
                draggable={false}
            />
        </div>
        <p className={isClicked ? 'portal__text-clicked' : 'portal__text'}>
            {text}
        </p>
    </div>
}

export default Portal;
