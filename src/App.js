//references
//React Router: https://reactrouter.com/web/guides/quick-start for navigation
//React Bootstrap: https://react-bootstrap.github.io/ to make it look good
//Create React App: https://create-react-app.dev/ For creating react app and deployment to GH pages
//React Icons: https://react-icons.github.io/
//Braden Collingwood: bcoll102@uottawa.ca Explaining How React Router Works

import React from 'react';
import {useState} from 'react';
import Navigation from './components/Navigation';
import NavigationFR from './components/NavigationFR';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { GrLanguage } from "react-icons/gr";

function App() {
  const pointer = {
    cursor: "pointer"
  }
  const [showEnglish, setShowEnglish] = useState(true);
  const updateLangFr = () => setShowEnglish(false);
  const updateLangEng = () => setShowEnglish(true);
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          
        </header>
        <div className="text-right mx-3"><GrLanguage className="mr-2"/><Link to="/FR" onClick={updateLangFr} className="text-danger" style={pointer}>Fr</Link> | <Link to="/" onClick={updateLangEng} className="text-danger" style={pointer}>Eng</Link></div>
        {showEnglish ? <Navigation /> : <NavigationFR />}
        <footer className="app-footer my-5">
          <p className="lead text-center">Website designed and developed by Jake Bisson</p> 
        </footer>
      </Router>
    </div>
  );
}

export default App;
