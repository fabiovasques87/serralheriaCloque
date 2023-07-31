
import { HeaderArea } from "./styled";
import { Menu } from "../../menu";
<<<<<<< HEAD
import logo2 from '../../../img/fundo.png';
=======
// import logo1 from '../../../img/logo2-modificado.png';
>>>>>>> c7de37e2fa984c28b9bc3f6d38a20708c33f65ad
import '@fortawesome/fontawesome-svg-core/styles.css';

export const Nav = () => {
    return (
        <div>

            <HeaderArea>
               <div className="menu">
                    <div className="logo1">
<<<<<<< HEAD
                        <img src={logo2} />
=======
                        {/* <img src={logo1} /> */}
                        <div className="title--nav">CLOQUE </div>
                        <div>A CASA DO SERRALHEIRO</div>
>>>>>>> c7de37e2fa984c28b9bc3f6d38a20708c33f65ad
                    </div>
                    <div className="text">
                      {/* <p>Sejá Bem vindo</p> */}
                    </div>
                   <div className="menu--menu">
                        <Menu />
                   </div>
               </div>
            </HeaderArea>
        </div>
    );
}

