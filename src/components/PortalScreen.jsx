import '../styles/PortalScreen.css';
import ReactDOM from 'react-dom';
import { usePortalScreen } from '../contexts/PortalScreenProvider';

function PortalScreen() {
    const [portalScreen] = usePortalScreen();

    return ReactDOM.createPortal(
        <div className={portalScreen ? 'portal-screen__enabled' : 'portal-screen'}>
            <p className={portalScreen ? 'portal-screen__text-enabled' : 'portal-screen__text'}>
                {portalScreen}
            </p>
        </div>,
        document.getElementById('portal')
    );
}

export default PortalScreen;