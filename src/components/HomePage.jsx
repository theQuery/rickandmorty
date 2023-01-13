import '../styles/HomePage.css';
import Background from './Background';
import NavBar from './NavBar';
import Footer from './Footer';

function HomePage() {
  return <section className='home-page'>
    <Background />
    <NavBar />
    <Footer />
  </section>
}

export default HomePage;