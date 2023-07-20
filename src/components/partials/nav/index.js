
import { HeaderArea } from "./styled";
import { Menu } from "../../menu";
// import logo1 from '../../../img/logo2-modificado.png';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const Nav = () => {
    return (
        <div>

            <HeaderArea>
               <div className="menu">
                    <div className="logo1">
                        {/* <img src={logo1} /> */}
                        <div className="title--nav">CLOQUE </div>
                        <div>A CASA DO SERRALHEIRO</div>
                    </div>
                    <div className="text">
                      <p>Sejá Bem vindo</p>
                    </div>
                   <div className="menu--menu">
                        <Menu />
                   </div>
               </div>
            </HeaderArea>
        </div>
    );
}

