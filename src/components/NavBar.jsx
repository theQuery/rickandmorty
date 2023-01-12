import '../styles/NavBar.css';
import Title from './Title';
import Portal from './Portal';

function NavBar() {
    return <nav className='navbar'>
        <Title />
        <div className='navbar__portals'>
            <Portal text='Characters' />
            <Portal text='Locations' />
            <Portal text='Episodes' />
        </div>
    </nav>
}

export default NavBar;
