import React from 'react';

import {
  BrowserRouter as Router,
 
} from "react-router-dom";

import './App.css';
import Menu from '../MenuBar/Menu';
import Head from '../Head/Head';
import Layout from "../Layout/Layout";



class App extends React.Component {
  render() {
    return (
    <body>
      
      <Router basename ='/site'>
        <div className="all-contents">
          <nav className = "left-sidebar">
              <Menu />
          </nav>
          <div className = "right-column">
            <div className = "top">
              <Head/>
            </div>
            <div className = "page">
              <Layout/>
            </div>  
          </div>  
          <footer> </footer>                                                                                          
            
            
          
          
        </div>
      </Router>
    </body>
    
  );
  }
}

export default App;
