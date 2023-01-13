import '../styles/Background.css';

function Background({ image }) {
  return <div className='background'>
    <div
      className='background__image'
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
    <div className='background__footer'></div>
    <div className='background__cover'></div>
  </div>
}

export default Background;
