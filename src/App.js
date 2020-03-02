import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './header/Header';
import Footer from "./footer/Footer";
import { makeStyles } from '@material-ui/core/styles';
import HouseList from './catalog/HouseList';

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flexGrow: 1,
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
  footer: {
    //flex: '0 0 auto'
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <HouseList />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </div>
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
