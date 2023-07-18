import { HeaderArea } from "./styled";
import logo from '../../../img/logo';


export const Header = () => {
    return (
        <div>

            <HeaderArea>
                <div className="linha"></div>
                <div className="header--logo">
                    <img src={logo} /> 
                </div>
            </HeaderArea>
        </div>
    );
}

