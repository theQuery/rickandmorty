import '../styles/Blur.css';
import ReactDOM from 'react-dom';
import { useBlur } from '../contexts/BlurProvider';

function Blur() {
    const [isBlurred] = useBlur();
    const className = isBlurred ? 'blur__enabled' : 'blur';

    return ReactDOM.createPortal(
        <div className={className}></div>,
        document.getElementById('portal')
    );
}

export default Blur;