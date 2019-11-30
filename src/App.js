/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
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
import { NetStruckDataProvider } from './NetStruckDataContext';
import { MediaBreakpointProvider } from './MediaBreakpointContext';

function App({ location, history }) {
  const [collapsibleNavIsExpanded, setCollapsibleNavIsExpanded] = useState(
    false
  );

  // set up listener and ensure collapsibleNav is collapsed on route change
  useEffect(() => {
    history.listen(() => {
      const navbarCollapsibleGroup = document.getElementById(
        'navbarCollapsibleGroup'
      );
      navbarCollapsibleGroup.style.transition = 'none';
      setCollapsibleNavIsExpanded(false);

      // remove transition: 'none' from inline style so it still works on toggle
      window.requestAnimationFrame(() =>
        navbarCollapsibleGroup.removeAttribute('style')
      );
    });
  }, [history]);

  return (
    <NetStruckDataProvider>
      <Navbar
        collapsibleNavIsExpanded={collapsibleNavIsExpanded}
        toggleCollapsibleNav={() =>
          setCollapsibleNavIsExpanded(!collapsibleNavIsExpanded)
        }
      />
      <MediaBreakpointProvider>
        <div className="relative flex flex-col flex-auto" id="main-wrapper">
          <TransitionGroup component={null}>
            <CSSTransition
              // prevent reanimation if active link is clicked by using pathname property
              key={location.pathname}
              timeout={{ enter: 300, exit: 150 }}
              classNames="page-fade"
              onExit={node => {
                const { scrollY } = window;

                const navbarHeight = document.querySelector('.navbar')
                  .offsetHeight;
                const footerHeight = document.querySelector('#footer')
                  .offsetHeight;
                const exitingHeight =
                  node.clientHeight + navbarHeight + footerHeight;
                // if no scrollbar, set width to 100vw so that content doesn't shift to left
                const exitingWidth =
                  window.innerHeight - exitingHeight > 0 ? '100vw' : '100%';

                // have exiting page overlap via absolute positioning, and set the top of
                // exiting  item equal to its scroll position prior to prepend; so, if the
                // content is scrolled down, it doesn't jump to the top of content
                node.style.top = `${-1 * scrollY}px`;
                node.classList.add('absolutely-zeroed');
                node.style.width = exitingWidth;
                window.scrollTo(0, 0);
              }}
              mountOnEnter
              unmountOnExit
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/now-playing" component={NowPlaying} />
                <Route
                  exact
                  path="/now-playing/:slug"
                  component={SelectionItem}
                />
                <Route
                  path="/now-playing/genre/:slug"
                  component={SelectionGenre}
                />
                <Route path="/all-films" component={AllFilms} />
                <Route path="/my-list" component={MyList} />
                <Route path="/signup" component={SignUp} />
                <Route component={Error404} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
        <Modal autoFocusCloseBtn={false}>
          <SearchFilter />
        </Modal>
      </MediaBreakpointProvider>
    </NetStruckDataProvider>
  );
}

export default withRouter(App);

App.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
};
