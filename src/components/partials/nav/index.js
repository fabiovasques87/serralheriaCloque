
import { HeaderArea } from "./styled";
import logo from '../../../img/logo';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const Nav = () => {
    return (
        <div>

            <HeaderArea>
               <div className="menu">

                    <div className="text">
                        <p>Sejá Bem vindo</p>
                    </div>
                   <div className="menu--menu">
                        <ul>
                            <li>Servicos</li>
                            <li>Contato</li>
                        </ul>
                   </div>
               </div>
            </HeaderArea>
        </div>
    );
}

