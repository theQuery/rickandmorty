import '../styles/EpisodesPage.css';
import background4 from '../assets/background4.jpg';
import PrimarySection from './PrimarySection';
import SecondarySection from './SecondarySection';
import NavBar from './NavBar';

function EpisodesPage() {
  return <main className='episodes-page'>
    <PrimarySection image={background4} />
    <SecondarySection />
    <NavBar />
  </main>
}

export default EpisodesPage;