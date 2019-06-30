import React from 'react';
import './App.css';
import './tailwind.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NowPlaying from './components/NowPlaying';
import AllFilms from './components/AllFilms';
import MyList from './components/MyList';

function App() {
  return (
    <div className='bg-gray-800'>
      <Router>
        <Navbar />
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/now-playing' component={NowPlaying} />
          <Route exact path='/all-films' component={AllFilms} />
          <Route exact path='/my-list' component={MyList} />
        </main>
      </Router>
    </div>
  );
}

export default App;
