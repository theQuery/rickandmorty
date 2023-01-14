import '../styles/HomePage.css';
import background1 from '../assets/background1.jpg';
import Background from './Background';
import NavBar from './NavBar';

function HomePage() {
  return <section className='home-page'>
    <Background image={background1} />
    <NavBar />
  </section>
}

export default HomePage;