
import { HeaderArea } from "./styled";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons"; 



export const IconeHome = () =>{
    return (
        <div>
            <HeaderArea>
                <FontAwesomeIcon icon={faHouse} className="faHouse" />
            </HeaderArea>
        </div>
    )
}