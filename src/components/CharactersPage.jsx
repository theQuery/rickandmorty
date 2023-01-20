import '../styles/CharactersPage.css';
import background2 from '../assets/background2.jpg';
import PrimarySection from './PrimarySection';
import CharactersSection from './CharactersSection';
import NavBar from './NavBar';
import SectionScroller from './SectionScroller';

function CharactersPage() {
  return <main className='characters-page'>
    <PrimarySection image={background2} />
    <CharactersSection />
    <NavBar />
    <SectionScroller />
  </main>
}

export default CharactersPage;