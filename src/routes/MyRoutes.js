import React from 'react';



import { NotFound } from '../pages/NotFound/NotFound';
import {EstruturaMetalica} from '../pages/estruturaMetalica';
import {EstruturaMetalicaArquitetura} from '../pages/estruturaMetalicaArquitetura';
import {TelhasGalvalume} from '../pages/telhasGalvalume'
import { TelhasTermoAcustica } from '../pages/telhasTermoAcustica';
import { TelhasSanduiche } from '../pages/telhasSanduiche';


import {useRoutes } from 'react-router-dom';

import { LandingPage } from '../components/partials/LandingPage';


const MyRoutes =() =>{
    const routes = useRoutes([
        {path: '/', element: <LandingPage />},
        {path: '/EstruturaMetalica', element: <EstruturaMetalica />},
        {path: '/TelhasGalvalume', element: <TelhasGalvalume />},
        {path: '/TelhasTermoAcustica', element: <TelhasTermoAcustica />},
        {path: '/TelhasSanduiche', element: <TelhasSanduiche />},


        {path: '*', element:<NotFound />}
    ]);


    return routes;
}



export default MyRoutes;