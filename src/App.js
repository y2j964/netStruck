import React from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import NowPlaying from './components/NowPlaying/NowPlaying';
import SelectionPage from './components/SelectionPage';
import AllFilms from './components/AllFilms/AllFilms';
import MyList from './components/MyList/MyList';
import { FilmDataProvider } from './context';

function App() {
  return (
    <Router>
      <Navbar />
      <FilmDataProvider>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/now-playing' component={NowPlaying} />
            <Route path='/now-playing/:slug' component={SelectionPage} />
            <Route path='/all-films' component={AllFilms} />
            <Route path='/my-list' component={MyList} />
            <Route component={Error404} />
          </Switch>
        </main>
      </FilmDataProvider>
      <Footer />
    </Router>
  );
}

export default App;
