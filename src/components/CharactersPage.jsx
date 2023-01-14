import '../styles/CharactersPage.css';
import background2 from '../assets/background2.jpg';
import Background from './Background';
import NavBar from './NavBar';

function CharactersPage() {
  return <section className='characters-page'>
    <Background image={background2} />
    <NavBar />
  </section>
}

export default CharactersPage;