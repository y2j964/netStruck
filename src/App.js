import React, { useState, useEffect } from 'react';
import './tailwind.css';
import { withRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import NowPlaying from './Pages/NowPlaying';
import SelectionItem from './Pages/Selection/SelectionItem';
import SelectionGenre from './Pages/Selection/SelectionGenre';
import AllFilms from './Pages/AllFilms/AllFilms';
import SignUp from './Pages/SignUp';
import MyList from './Pages/MyList/MyList';
import Error404 from './Pages/Error404';
import SearchFilter from './components/SearchFilter/SearchFilter';
import Modal from './components/Modal/Modal';
import ScrollToTop from './components/ScrollToTop';
import { NetStruckDataProvider } from './context';

function App({ location, history }) {
  const [collapsibleNavIsExpanded, setCollapsibleNavIsExpanded] = useState(
    false,
  );

  // set up listener and ensure collapsibleNav is collapsed on route change
  useEffect(() => {
    history.listen(() => {
      document.getElementById('navbarCollapsibleGroup').style.transition =
        'none';
      setCollapsibleNavIsExpanded(false);
    });
  }, [history]);

  return (
    <ScrollToTop>
      <NetStruckDataProvider>
        <Navbar
          collapsibleNavIsExpanded={collapsibleNavIsExpanded}
          toggleCollapsibleNav={() =>
            setCollapsibleNavIsExpanded(!collapsibleNavIsExpanded)
          }
        />
        <TransitionGroup component={null}>
          <CSSTransition
            // prevent reanimation if active link is clicked by using pathname property
            key={location.pathname}
            timeout={200}
            classNames='fade'
            mountOnEnter
            unmountOnExit
          >
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route exact path='/now-playing' component={NowPlaying} />
              <Route
                exact
                path='/now-playing/:slug'
                component={SelectionItem}
              />
              <Route
                path='/now-playing/genre/:slug'
                component={SelectionGenre}
              />
              <Route path='/all-films' component={AllFilms} />
              <Route path='/my-list' component={MyList} />
              <Route path='/signup' component={SignUp} />
              <Route component={Error404} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Modal autoFocusCloseBtn={false}>
          <SearchFilter />
        </Modal>
      </NetStruckDataProvider>
      <Footer />
    </ScrollToTop>
  );
}

export default withRouter(App);

App.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};
