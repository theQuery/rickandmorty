import '../styles/Portal.css';
import portal from '../assets/portal.gif';

function Portal({ text }) {
    // Use this for the click sound effect:
    // https://www.youtube.com/watch?v=l3JXzuX7mmA
    return <div className='portal'>
        <img
            className='portal__image'
            src={portal}
            alt={text}
            draggable={false}
        />
        <div className='portal__glow'></div>
        <p className='portal__text'>
            {text}
        </p>
    </div>
}

export default Portal;
