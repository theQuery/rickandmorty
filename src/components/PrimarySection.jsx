import '../styles/PrimarySection.css';

function PrimarySection({ image }) {
  return <section className='primary-section'>
    <div
      className='primary-section__image'
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
    <div className='primary-section__footer'></div>
    <div className='primary-section__cover'></div>
  </section>
}

export default PrimarySection;
