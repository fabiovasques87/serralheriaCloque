import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {LandingPage} from './components/partials/LandingPage'



export const App = () =>{


  useEffect(() => {
    document.title = 'Cloque estruturas metálicas';
  }, []);

  return(
  <div>
    <LandingPage />
  </div>
  );
}
export default App;
