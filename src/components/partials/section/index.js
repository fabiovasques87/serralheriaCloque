
import { HeaderArea } from "./styled"
import { Btn } from "../../btn/btnServices"
import estruturaMetalica from '../../../img/estrutura-metalica.png';
import estruturaMetalicaArquitetura from '../../../img/estrutura-metalica-arquitetura.png'
import telhasGalvalume from '../../../img/telhasGalvalume.jpeg';
import telhasTermoAcusticas from '../../../img/telhasTermoacusticas.jpeg';
import telhasSanduiche from '../../../img/telhasanduiche.png';


export const Section = () => {
    return (
        <div>
            <HeaderArea>
                <div className="title">
                    <p>estruturas metalicas</p>
                    <div className="sub-title">
                    é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                    é simplesmente uma simulação de texto da indústria tipográfica e de impressos
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                    </div>
                </div>

                <div class="section--services" >
                   
                    <div class="item" >
                        <div className="estrutura--metalica--tile">
                            <p>estruturas metalicas</p>
                        </div>
                        <div className="estrutura--metalica--img">
                            <img src={estruturaMetalica} />
                        </div>
                        <div  className="estrutura--metalica--desc">
                            <ul>
                                <li>Redução no tempo de contrução</li>
                                <li>Qualidade e segurança</li>
                                <li>Responsabilidade ambiental</li>
                                <li>Flexibilidade de uso</li>
                            </ul>
                        </div>
                        <div className="btn">
                            <div className="btn--2">
                                <Btn />
                            </div>                               
                        </div>
                    </div>

                    <div class="item">
                        <div className="estrutura--metalica--tile">
                            <p>estruturas metalicas na arquitetura</p>
                        </div>
                        <div className="estrutura--metalica--img">
                            <img src={estruturaMetalicaArquitetura} />
                        </div>
                        <div  className="estrutura--metalica--desc">
                            <p>
                                Concede um melhor aproveitamento do espaço disponível, 
                                enrriquecendo a estética e até possibilitando linhas ousadas
                            </p>
                        </div>
                        <div className="btn">
                            <div className="btn--2">
                                <Btn />
                            </div>                               
                        </div>
                    </div>

                   
                   
                </div>
               
              <div className="separador"></div>

                <div className="title">
                <p>Telhas</p>

                    

                    <div className="sub-title">
                    é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                    é simplesmente uma simulação de texto da indústria tipográfica e de impressos
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                    </div>
                </div>

                <div class="section--services" >

                <div class="item">
                        <div className="estrutura--metalica--tile">
                            <p>Telhas Galvalume</p>
                        </div>
                        <div className="estrutura--metalica--img">
                            <img src={telhasGalvalume} />
                        </div>
                        <div  className="estrutura--metalica--desc">
                            <ul>
                                <li>Redução no tempo de contrução</li>
                                <li>Qualidade e segurança</li>
                                <li>Responsabilidade ambiental</li>
                                <li>Flexibilidade de uso</li>
                            </ul>
                        </div>
                        <div className="btn">
                            <div className="btn--2">
                                <Btn />
                            </div>                               
                        </div>
                    </div>

                    <div class="item">
                        <div className="estrutura--metalica--tile">
                            <p>Telhas termoacústicas</p>
                        </div>
                        <div className="estrutura--metalica--img">
                            <img src={telhasTermoAcusticas} />
                        </div>
                        <div  className="estrutura--metalica--desc">
                            <ul>
                                <li>Redução no tempo de contrução</li>
                                <li>Qualidade e segurança</li>
                                <li>Responsabilidade ambiental</li>
                                <li>Flexibilidade de uso</li>
                            </ul>
                        </div>
                        <div className="btn">
                            <div className="btn--2">
                                <Btn />
                            </div>                               
                        </div>
                    </div>

                    <div class="item" >
                            <div className="estrutura--metalica--tile">
                                <p>Tehas Sanduíche</p>
                            </div>
                            <div className="estrutura--metalica--img">
                            <img src={telhasSanduiche} />
                        </div>
                            <div  className="estrutura--metalica--desc">
                               <p>
                                A solução moderna, eficaz e econômica em coberturas e fechamentos laterais, 
                                para variados tipos  de edificações.super-resistentes a ...
                               </p>
                            </div>
                            <div className="btn">
                            <div className="btn--2">
                                <Btn />
                            </div>                               
                        </div>

                        </div>
                        
                </div>


            </HeaderArea>
        </div>
    )
}