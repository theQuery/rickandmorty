import '../styles/EpisodesPage.css';
import background4 from '../assets/background4.jpg';
import Background from './Background';
import NavBar from './NavBar';

function EpisodesPage() {
  return <section className='episodes-page'>
    <Background image={background4} />
    <NavBar />
  </section>
}

export default EpisodesPage;