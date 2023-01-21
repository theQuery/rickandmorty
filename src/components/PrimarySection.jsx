import '../styles/PrimarySection.css';
import NavBar from './NavBar';

function PrimarySection({ image }) {
  return <section className='primary-section'>
    <div
      className='primary-section__image'
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
    <div className='primary-section__cover'></div>
    <NavBar />
  </section>
}

export default PrimarySection;
