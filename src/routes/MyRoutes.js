import React from 'react';



import { NotFound } from '../pages/NotFound/NotFound';
import {useRoutes } from 'react-router-dom';



import { LandingPage } from '../components/partials/LandingPage';


const MyRoutes =() =>{
    const routes = useRoutes([
        {path: '/', element: <LandingPage />},
        // {path: '/LandingPage', element: <LandingPage />},
        {path: '*', element:<NotFound />}
    ]);


    return routes;
}



export default MyRoutes;