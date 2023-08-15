import React from 'react';



import { NotFound } from '../pages/NotFound/NotFound';
import {Estrutura} from '../pages/estruturaMetalica';
import {EstruturaMetalicaArquitetura} from '../pages/estruturaMetalicaArquitetura';

import {useRoutes } from 'react-router-dom';

import { LandingPage } from '../components/partials/LandingPage';


const MyRoutes =() =>{
    const routes = useRoutes([
        {path: '/', element: <LandingPage />},
        {path: '/estrutura', element: <Estrutura />},
        {path: '/estruturaMetalicaArquitetura', element: <EstruturaMetalicaArquitetura />},
        {path: '*', element:<NotFound />}
    ]);


    return routes;
}



export default MyRoutes;