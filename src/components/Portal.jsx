import '../styles/Portal.css';
import portal from '../assets/portal.gif';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePortalScreen } from '../contexts/PortalScreenProvider';

// Use this for the click sound effect:
// https://www.youtube.com/watch?v=l3JXzuX7mmA
function Portal({ text }) {
    const [isClicked, setIsClicked] = useState(false);
    const [portalScreen, setPortalScreen] = usePortalScreen();
    const navigate = useNavigate();
    const location = useLocation();

    const pathName = location.pathname;
    const path = pathName.slice(1, pathName.length);
    if (text.toLowerCase() === path) text = 'Home';

    const handleClick = () => {
        setPortalScreen(text);
        setIsClicked(true);

        setTimeout(() => {
            navigate(`/${text.toLowerCase()}`);
            setPortalScreen(false);
        }, 2500);
    };

    // TODO:
    // navbar inside components:
    // 1. click portal
    // 2. that will fetch data and trigger the portal to grow/blur.
    // 3. on react-query fetch onSuccess, it'll give the portal a class to fade out
    // and along with a 2s setTimeout wrapping the navigate to new page.

    return <div
        className='portal'
        onClick={handleClick}
    >
        <div className={isClicked ? 'portal__raw__clicked' : 'portal__raw'}>
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
