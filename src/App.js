import './App.css';
import Header from './components/headers/Header';
import SimpleBottomNavigation from './components/MainNav';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import { Movies } from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Profile from './Pages/Profile/Profile';
// import MainNav from "./components/MainNav"

// https://api.themoviedb.org/3/trending/all/day?api_key=531c48a160d92da0da1d33264683e77d
function App() {
  return (
    <>
    <Router>
    <Header/>
    <div className="app">
      <Container>
          <Routes>
            <Route exact path='/' element={<Trending/>} />
            <Route path='/movies' element={<Movies/> } />
            <Route path='/series' element={<Series/> } />
            <Route path='/search' element={<Search/> } />
            <Route path='/profile' element={<Profile/> } />
          </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation/>
    </Router>
    </>
  );
}

export default App;
