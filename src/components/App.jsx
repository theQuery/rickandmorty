import '../styles/App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import CharactersPage from './CharactersPage';
import LocationsPage from './LocationsPage';
import EpisodesPage from './EpisodesPage';
import Blur from './Blur';
import Footer from './Footer';

function App() {
  return <div className='app'>
    <Routes>
      <Route exact path='/home' element={<HomePage />} />
      <Route exact path='/characters' element={<CharactersPage />} />
      <Route exact path='/locations' element={<LocationsPage />} />
      <Route exact path='/episodes' element={<EpisodesPage />} />
      <Route path='*' element={<Navigate replace to='/home' />} />
    </Routes>
    <Blur />
    <Footer />
  </div>
}

export default App;