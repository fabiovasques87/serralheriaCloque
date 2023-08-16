
import { HeaderArea } from "./styled";
import { Menu2 } from "../../menu2";
import logo2 from '../../../img/logo3-modificado.png';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const Nav2 = () => {
    return (
        <div>

            <HeaderArea>
               <div className="menu">
                    <div className="menu--menu">
                        <Menu2 />                      
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

