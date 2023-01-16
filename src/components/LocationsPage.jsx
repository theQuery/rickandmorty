import '../styles/LocationsPage.css';
import background3 from '../assets/background3.jpg';
import PrimarySection from './PrimarySection';
import SecondarySection from './SecondarySection';
import NavBar from './NavBar';

function LocationsPage() {
  return <main className='locations-page'>
    <PrimarySection image={background3} />
    <SecondarySection />
    <NavBar />
  </main>
}

export default LocationsPage;