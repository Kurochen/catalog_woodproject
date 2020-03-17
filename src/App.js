import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './header/Header';
import Footer from "./footer/Footer";
import { makeStyles } from '@material-ui/core/styles';
import HouseList from './catalog/HouseList';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DomLayout from '../src/domLayout/DomLayout'

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    backgroundColor: '#eaebeb'
  },
  main: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(7),
  },
  footer: {
    //flex: '0 0 auto'
  }
}));


function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <main className={classes.main}>
          <Switch>
            <Route exact path='/'>
              <HouseList />
            </Route>
            <Route path='/:house' children={<DomLayout />}>
            </Route>
          </Switch>
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Test />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
