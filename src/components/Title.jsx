import '../styles/Title.css';
import title from '../assets/title.png';

function Title() {
  return <a
    className='title'
    href='https://play.hbomax.com/page/urn:hbo:page:GXkRkPgoDro7CZgEAABqh:type:episode'
    target='_blank'
    rel='noreferrer'
  >
    <img
      className='title__image'
      src={title}
      alt='Rick And Morty'
      draggable={false}
    />
  </a>
}

export default Title;
