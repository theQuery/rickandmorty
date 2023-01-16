import '../styles/HomePage.css';
import background1 from '../assets/background1.jpg';
import PrimarySection from './PrimarySection';
import NavBar from './NavBar';

function HomePage() {
  return <main className='home-page'>
    <PrimarySection image={background1} />
    <NavBar />
  </main>
}

export default HomePage;