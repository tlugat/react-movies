import {useState ,lazy } from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import './App.scss';
import callApi from '../../Utils/callApi';

const Accueil =lazy(()=> import('../Accueil/Accueil')) 
  
const Footer=lazy(()=> import('../Footer/Footer'))
const Header=lazy(()=> import('../Header/Header'))

const FilmDetails=lazy(()=> import('../FilmDetails/FilmDetails')) 
const FiltersCard=lazy(()=> import('../FiltersCard/FiltersCard')) 



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
  const [isDisplayed, setIsDisplayed] = useState(true)
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
      <BrowserRouter>
        <Header  handleDisplayAcc={handleDisplayAcc} handleDisplayMenu={handleDisplayMenu} className="app__header"/>
    
          <Switch>
            <Route
              exact 
              path="/"
              render={(props) => 
                <div>
                     <Accueil isDisplayed={isDisplayed} medias={medias} setMedias={setMedias} setFilters={setFilters} filters={filters}/> 
                     <FiltersCard isActive={isActive}  applyFilters={applyFilters} setFilters={setFilters} filters={filters} ></FiltersCard>
                </div> 
              }
            />
            <Route
            exact 
            path="/Detail/:id"
            component={FilmDetails}
            />
            <Redirect to="/" />
          </Switch>
          <Footer/>
       
      </BrowserRouter>


    </div>    
  );
}

export default App;
