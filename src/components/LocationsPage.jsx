import '../styles/LocationsPage.css';
import background3 from '../assets/background3.jpg';
import Background from './Background';
import NavBar from './NavBar';

function LocationsPage() {
  return <section className='locations-page'>
    <Background image={background3} />
    <NavBar />
  </section>
}

export default LocationsPage;