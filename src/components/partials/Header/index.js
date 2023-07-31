import { HeaderArea } from "./styled";
<<<<<<< HEAD
import logo from '../../../img/logo2.png';
=======
import logo from '../../../img/logo3.png';
>>>>>>> c7de37e2fa984c28b9bc3f6d38a20708c33f65ad


export const Header = () => {
    return (
        <div>

            <HeaderArea>
                <div className="linha"></div>
                <div className="header--left">
                    <img src={logo} /> 
                </div>
                <div className="header--right">
                </div>
            </HeaderArea>
        </div>
    );
}

