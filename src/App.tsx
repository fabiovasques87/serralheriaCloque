import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



import MyRoutes from './routes/MyRoutes';



export const App = () =>{


  useEffect(() => {
    document.title = 'Cloque estruturas metálicas';
  }, []);

  return(
  <div>
    <MyRoutes />
  </div>
  );
}
export default App;
