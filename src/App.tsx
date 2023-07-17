import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from "./components/partials/Header";
import { Footer } from "./components/partials/Footer";
import { Nav } from './components/partials/nav';
import { Section } from './components/partials/section';
import { Btn } from './components/btn/btnServices';



export const App = () =>{

  return(
  <div>
    <Header />
    <Nav />
    <Section />
    <Footer />
  </div>
  );
}
export default App;
