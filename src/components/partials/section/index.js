
import { HeaderArea } from "./styled";
import { Btn } from "../../btn/btnServices";
import ScrollToTopButton from "../../buttonScroll";

import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll";


import estruturaMetalica from '../../../img/estrutura-metalica.png';
import estruturaMetalicaArquitetura from '../../../img/estrutura-metalica-arquitetura.png'
import telhasGalvalume from '../../../img/telha-galvalume.jpeg';
import telhasTermoAcusticas from '../../../img/telhas termo acustíca-atualjpeg';
import telhasSanduiche from '../../../img/telhasSanduiche.png';
import galpao1 from '../../../img/galpao1.png';
import galpao2 from '../../../img/galpao 2.png';
import galpao3 from '../../../img/galpao 3.png';
import logo from '../../../img/fundo-title2.png';



export const Section = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <HeaderArea>
                <div className="title" id="estrutura-metalica">
                    <p>Estruturas metalicas</p>
                </div>
                    <div className="sub-title">
                           teste é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                            é simplesmente uma simulação de texto da indústria tipográfica e de impressos
                            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                    </div>
                

                <div class="section--services" >
                   
                    <div class="item" >
                        <div className="estrutura--metalica--tile">
                            {/* <p>estruturas metalicas</p> */}
                        </div>
                        <div
                            className="estrutura--metalica--img"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered && (
                                <div className="efeito">
                                  <a href="https://wa.me/53999010150" >  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> </a>
                                    <p>Entrar em contato</p>
                                </div>
                            )}
                              <img src={estruturaMetalica} alt="Estrutura Metálica" />
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
                        <div
                            className="estrutura--metalica--img"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered && (
                                <div className="efeito">
                                  <a href="https://wa.me/53999367651" >  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> </a>
                                    <p>Entrar em contato</p>
                                </div>
                            )}
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

                <div className="title" id="telhas">
                    <p>Telhas</p>
                </div>
                    

                    <div className="sub-title">
                    
                         é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                        é simplesmente uma simulação de texto da indústria tipográfica e de impressos
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                        
                    </div>
                

                <div class="section--services" >

                <div class="item">
                        <div className="estrutura--metalica--tile">
                            <p>Telhas Galvalume</p>
                        </div>
                        <div
                            className="estrutura--metalica--img"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered && (
                                <div className="efeito">
                                  <a href="https://wa.me/53999367651" >  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> </a>
                                    <p>Entrar em contato</p>
                                </div>
                            )}
                              <img src={telhasGalvalume} />
                              </div>
                        <div  className="estrutura--metalica--desc">
                            <p>
                            são a solução moderna, eficaz e económica em coberturas e fechamentos laterais, para
                             os mais variados tipos de empreendimentos e edificações. Super-resistentes a intempéries,
                              inclusive nos rigorosos ambientes marítimos e industriais.
                            </p>
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
                        <div
                            className="estrutura--metalica--img"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered && (
                                <div className="efeito">
                                  <a href="https://wa.me/53999367651" >  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> </a>
                                    <p>Entrar em contato</p>
                                </div>
                            )}
                            <img src={telhasTermoAcusticas} />
                            </div>
                        <div  className="estrutura--metalica--desc">
                           <p>
                           são perfeitas para projetos que exigem ótimo acabamento com isolamento térmico e acústico, que minimizam gastos com energia, refrigeração e controle de emissões sonoras externas em processos produtivos, personalização ( é feita sobre medida), fácil manutenção e durabilidade.
                            Além de promover ambientes com condições mais agradáveis para se trabalhar, refletindo, inclusive, em ganhos de produtividade.
                           </p>
                          
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
                            <div
                            className="estrutura--metalica--img"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered && (
                                <div className="efeito">
                                  <a href="https://wa.me/53999367651" >  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> </a>
                                    <p>Entrar em contato</p>
                                </div>
                            )}
                             <img src={telhasSanduiche} />
                             </div>
                            <div  className="estrutura--metalica--desc">
                               <p>
                               são composta por duas telhas metálicas formando um “sanduíche” com o núcleo em EPS (poliestireno), 
                               criando um produto novo, dotado de grande rigidez, de alta resistência térmica e de grande isolamento a ruídos externos.
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

                <div className="title" id="galpao">
                    <p>GALPÕES</p>
                </div>
                                

                    <div className="sub-title">
                    é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                    é simplesmente uma simulação de texto da indústria tipográfica e de impressos
                    e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                    </div>
               
                
                <div class="section--services" >

                    <div class="item">
                            <div className="estrutura--metalica--tile">
                                {/* <p>Galpão</p> */}
                            </div>
                            <div
                            className="estrutura--metalica--img"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            >
                            {isHovered && (
                                <div className="efeito">
                                  <a href="https://wa.me/53999367651" >  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> </a>
                                    <p>Entrar em contato</p>
                                </div>
                            )}
                            <img src={galpao1} />
                            </div>
                            <div  className="estrutura--metalica--desc">
                               <p>
                                Ótimo investimento pela resistência do material e confortabilidade. 
                                Rápidos e fáceis de serem erguidos, os galpões metálicos são compostos
                                por pilares, vigas de sustentação e elementos de travamento, cobertura e fechamento em aluzinco.
                               </p>
                            </div>
                            <div className="btn">
                                <div className="btn--2">
                                    <Btn />
                                </div>                               
                            </div>
                        </div>

                        <div class="item">
                        <div className="estrutura--metalica--tile">
                            {/* <p>Galpão</p> */}
                        </div>
                        <div
                            className="estrutura--metalica--img"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered && (
                                <div className="efeito">
                                  <a href="https://wa.me/53999367651" >  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> </a>
                                    <p>Entrar em contato</p>
                                </div>
                            )}
                             <img src={galpao2} />
                             </div>
                        <div  className="estrutura--metalica--desc">
                        <p>
                            Ótimo investimento pela resistência do material e confortabilidade. 
                            Rápidos e fáceis de serem erguidos, os galpões metálicos são compostos
                            por pilares, vigas de sustentação e elementos de travamento, cobertura e fechamento em aluzinco.
                        </p>
                        </div>
                        <div className="btn">
                            <div className="btn--2">
                                <Btn />
                            </div>                               
                        </div>
                    </div>

                    <div class="item">
                        <div className="estrutura--metalica--tile">
                            {/* <p>Galpão</p> */}
                        </div>
                        <div
                            className="estrutura--metalica--img"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered && (
                                <div className="efeito">
                                  <a href="https://wa.me/53999367651" >  <FontAwesomeIcon icon={faWhatsapp} className="icon" /> </a>
                                    <p>Entrar em contato</p>
                                </div>
                            )}
                            <img src={galpao3} />
                            </div>
                        <div  className="estrutura--metalica--desc">
                        <p>
                            Ótimo investimento pela resistência do material e confortabilidade. 
                            Rápidos e fáceis de serem erguidos, os galpões metálicos são compostos
                            por pilares, vigas de sustentação e elementos de travamento, cobertura e fechamento em aluzinco.
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


                    <div className="about" id="about">
                        <p>
                            Sobre Nós
                        </p>
                                
                    </div>
                    <div className="about--items">
                            <div className="logo--about">
                                 <img src={logo} />
                            </div>
                            <div className="about--texto">
                                <div className="about--title">CLOQUE ESTRUTURAS METALICAS E TELHAS</div> 
                                &nbsp; é uma empresa que trabalha  à mais de 50 anos no segmento de fabricação e a montagem de estruturas metálicas e telhas de aluzinco, para coberturas de edificações que exijam um diferencial de qualidade e necessitem atender projetos de pequenos, médios e grandes portes com segurança e sofisticação. 
Tendo o compromisso em oferecer o melhor custo beneficio aos nossos clientes, utilizando mão de obra qualificada e equipamentos modernos, com uma vasta experiência no ramo, visando qualidade e agilidade.

                            </div>
                          
                    
                    </div>
                               
            
            <ScrollToTopButton  />

            </HeaderArea>
        </div>
    )
}