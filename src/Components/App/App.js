import './App.scss';
import Accueil from '../Accueil/Accueil';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import FilmDetails from '../FilmDetails/FilmDetails'
function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Accueil /> 
      <Footer />
      <FilmDetails/>
    </div>    
  );
}

export default App;
