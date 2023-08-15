import { Nav } from "../../components/partials/nav";
import { Footer } from "../../components/partials/Footer";

import { HeaderArea } from "./styled";

import { Link } from 'react-router-dom';


export const NotFound = () =>{
    return (
        <div>
            <HeaderArea>
                <Nav /> 
                <div className="NotFound">A página que você está procurando não foi encontrada.<br />
            
                    <Link to="/">Voltar para a Página Inicial</Link>
                </div>
                <Footer />
            </HeaderArea>
        </div>
    );
}