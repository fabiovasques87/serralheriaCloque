import { HeaderArea } from "./styled";
import { BtnForm } from "../../btn/btnForm";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div>
            <HeaderArea>
                <div className="footer">

                        <div className="footer--left--contato">
                                <p><FontAwesomeIcon icon={faWhatsapp} /> (53) 9 99999999 </p>
                                <p> claudia@email.com.br </p>
                                <p> <FontAwesomeIcon icon={faInstagram} /> cloquecasadoserralheiro </p>

                        </div>
                  
                        <div className="footer--right">
                                <form>
                                    <label>Email</label>
                                    <input type="email" placeholder="Seu e-mail"/>

                                    <label>Descrição</label>
                                <textarea placeholder="Insira um comentário">

                                </textarea>
                                <BtnForm />
                                </form>
                        </div>

                       

                </div>

                

                    <div className="footer--bottom">
                        <span>&copy; 2023 Desenvolvido por Fábio Vasques</span>
                    </div>
              
               
            </HeaderArea>
        </div>
    )
}