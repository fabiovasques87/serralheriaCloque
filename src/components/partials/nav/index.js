
import { HeaderArea } from "./styled";
import { Menu } from "../../menu";
import logo2 from '../../../img/logo3-modificado.png';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const Nav = () => {
    return (
        <div>

            <HeaderArea>
               <div className="menu">
                    <div className="menu--menu">
                        <Menu />                      
                    </div>
                    <div className="text">
                      {/* <p>Sejá Bem vindo</p> */}
                    </div>
                   <div className="logo1">
                     <img src={logo2} />
                   </div>
               </div>
            </HeaderArea>
        </div>
    );
}

