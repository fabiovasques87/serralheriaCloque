
import { HeaderArea } from "./styled";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const Menu = () =>{
    return (
        <div>
            <HeaderArea>

            

            <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Serviços
                </Dropdown.Toggle>

                

                    <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1" active>
                    Serviços
                </Dropdown.Item> */}
                <Dropdown.Item href="#/action-2">Telhas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Estruturas metálicas</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          
         

            {/* <nav>
                    <ul class="menu">
                            <li><a href="#">Contato</a></li>
                                <li><a href="#">Serviçoes</a>
                                    <ul>
                                        <li><a href="#">Estruturas metálicas</a></li>
                                        <li><a href="#">Telhas</a></li>
                                        <li><a href="#">Galpões</a></li>
                                    </ul>
                                </li>
                    </ul>
                </nav> */}

            </HeaderArea>
        </div>
    );
}