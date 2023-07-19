import { HeaderArea } from "./styled";
import logo from '../../../img/logo.jpeg';


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

