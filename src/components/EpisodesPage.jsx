import '../styles/EpisodesPage.css';
import background4 from '../assets/background4.jpg';
import PrimarySection from './PrimarySection';
import SecondarySection from './SecondarySection';

function EpisodesPage() {
  return <main className='episodes-page'>
    <PrimarySection image={background4} />
    <SecondarySection />
  </main>
}

export default EpisodesPage;