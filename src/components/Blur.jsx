import '../styles/Blur.css';
import { useBlur } from '../contexts/BlurProvider';

function Blur() {
    const [isBlurred] = useBlur();
    const className = isBlurred ? 'blur__enabled' : 'blur';
    return <div className={className}></div>;
}

export default Blur;