import React from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import NowPlaying from './components/NowPlaying/NowPlaying';
import AllFilms from './components/AllFilms';
import MyList from './components/MyList';

function App() {
  return (
    <div className='bg-gray-900'>
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
    </div>
  );
}

export default App;
