import React from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <ScrollToTop>
            <NetStruckDataProvider>
              <Navbar />
              <TransitionGroup component={null}>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames='fade'
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
              <Modal>
                <SearchFilter />
              </Modal>
            </NetStruckDataProvider>
            <Footer />
          </ScrollToTop>
        )}
      />
    </Router>
  );
}

export default App;

// import React from 'react';
// import './tailwind.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Home from './Pages/Home';
// import NowPlaying from './Pages/NowPlaying';
// import SelectionItem from './Pages/Selection/SelectionItem';
// import SelectionGenre from './Pages/Selection/SelectionGenre';
// import AllFilms from './Pages/AllFilms/AllFilms';
// import SignUp from './Pages/SignUp';
// import MyList from './Pages/MyList/MyList';
// import Error404 from './Pages/Error404';
// import SearchFilter from './components/SearchFilter/SearchFilter';
// import Modal from './components/Modal/Modal';
// import ScrollToTop from './components/ScrollToTop';
// import { NetStruckDataProvider } from './context';

// function App() {
//   return (
//     <Router>
//       <ScrollToTop>
//         <NetStruckDataProvider>
//           <Navbar />
//           <Switch>
//             <Route exact path='/' component={Home} />
//             <Route exact path='/now-playing' component={NowPlaying} />
//             <Route exact path='/now-playing/:slug' component={SelectionItem} />
//             <Route path='/now-playing/genre/:slug' component={SelectionGenre} />
//             <Route path='/all-films' component={AllFilms} />
//             <Route path='/my-list' component={MyList} />
//             <Route path='/signup' component={SignUp} />
//             <Route component={Error404} />
//           </Switch>
//           <Modal>
//             <SearchFilter />
//           </Modal>
//         </NetStruckDataProvider>
//         <Footer />
//       </ScrollToTop>
//     </Router>
//   );
// }

// export default App;
