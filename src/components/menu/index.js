
import { HeaderArea } from "./styled";



export const Menu = () =>{
    return (
        <div>
            <HeaderArea>
            <nav>
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
                </nav>

            </HeaderArea>
        </div>
    );
}