
import { HeaderArea } from "./styled";
import { Menu } from "../../menu";
import '@fortawesome/fontawesome-svg-core/styles.css';

export const Nav = () => {
    return (
        <div>

            <HeaderArea>
               <div className="menu">

                    <div className="text">
                      {/*<p>Sejá Bem vindo</p>   */}  
                    </div>
                   <div className="menu--menu">
                        <Menu />
                   </div>
               </div>
            </HeaderArea>
        </div>
    );
}

