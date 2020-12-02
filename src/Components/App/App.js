import './App.scss';
import Accueil from '../Accueil/Accueil';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import FiltersCard from '../FiltersCard/FiltersCard';
import callApi from '../../Utils/callApi';
import {useState} from 'react';

function App() {
  const [medias, setMedias] = useState([]);

  const [filters, setFilters] = useState({
    type: 'movie',
    genre: [],
    date: [2019, 2020],
    rate: [0, 10],
    status: '',
    sortBy: 'release_date.desc'
  })

  const [isActive, setIsActive] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const applyFilters = () => callApi(setMedias, filters);

  let newIsActive = {...isActive};
  let newIsDisplayed = {...isDisplayed};
 
  const handleDisplayMenu = () => {
    newIsActive = !isActive;
    setIsActive(newIsActive);
  }
  
  const handleDisplayAcc = (state) => {
    if(state.length > 0) {
      newIsDisplayed = false
    } else {
      newIsDisplayed = true;
    }
    setIsDisplayed(newIsDisplayed)
  }
  
  return (
    <div className="app">
      <Header filtersIsActive={isActive} handleDisplayAcc={handleDisplayAcc} handleDisplayMenu={handleDisplayMenu} className="app__header" />
      <Accueil isDisplayed={isDisplayed} medias={medias} setMedias={setMedias} setFilters={setFilters} filters={filters}/> 
      <FiltersCard handleDisplayMenu={handleDisplayMenu} isActive={isActive}  applyFilters={applyFilters} setFilters={setFilters} filters={filters} ></FiltersCard>
      <Footer />
    </div>    
  );
}

export default App;
