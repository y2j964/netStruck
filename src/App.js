import React from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import NowPlaying from './components/NowPlaying/NowPlaying';
import AllFilms from './components/AllFilms';
import MyList from './components/MyList';
import { FilmDataProvider } from './context';

function App() {
  return (
    <FilmDataProvider>
      <Router>
        <Navbar />
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/now-playing' component={NowPlaying} />
          <Route exact path='/all-films' component={AllFilms} />
          <Route exact path='/my-list' component={MyList} />
        </main>
        <Footer />
      </Router>
    </FilmDataProvider>
  );
}

export default App;
