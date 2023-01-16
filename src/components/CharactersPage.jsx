import '../styles/CharactersPage.css';
import background2 from '../assets/background2.jpg';
import PrimarySection from './PrimarySection';
import SecondarySection from './SecondarySection';
import NavBar from './NavBar';

function CharactersPage() {
  return <main className='characters-page'>
    <PrimarySection image={background2} />
    <SecondarySection />
    <NavBar />
  </main>
}

export default CharactersPage;