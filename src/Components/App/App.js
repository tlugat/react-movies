import './App.scss';
import Accueil from '../Accueil/Accueil';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
function App() {
  return (

      
    <div className="app">
      <Header />
      <Accueil /> 
      <Footer />
    </div>    
  );
}

export default App;
