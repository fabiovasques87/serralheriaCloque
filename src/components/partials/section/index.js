
import { HeaderArea } from "./styled";
import { Btn } from "../../btn/btnServices";
import ScrollToTopButton from "../../buttonScroll";

import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';



import estruturaMetalica from '../../../img/ultimas/estrutura1.jpg';
import estruturaMetalica2 from '../../../img/ultimas/estrutura2.jpg';
import estruturaMetalica3 from '../../../img/ultimas/estrutura3.jpg';
import estruturaMetalicaArquitetura from '../../../img/ultimas/estrutura4.jpg'
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
                    {/* <div className="sub-title">
                           teste é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                            é simplesmente uma simulação de texto da indústria tipográfica e de impressos
                            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                    </div> */}
                <div className="estrutura--metalica--desc">

                

                        <p>
                        Rápidos e fáceis de serem erguidos, os galpões metálicos são compostos basicamente por pilares, vigas de sustentação e elementos de travamento, cobertura e fechamento em aluzinco. 
                        Geralmente usados para fins logísticos, de armazenagem ou de produção industrial e rural.
                        

                        <br />
                        Quando construídos a partir de estruturas e materiais metálicos,
                        os galpões se tornam mais resistentes e confortáveis, representando um ótimo investimento.
                        </p>

                        <div className="sub--title--carousel--top">
                            Benefícios de estruturas metálicas:
                        </div>
                        <p>
                        Há uma redução de até 40% na construção quando comparado às estruturas de concreto. Por serem fabricadas sob medida, as 
                        estruturas metálicas chegam prontas ao local da obra. Dessa forma, são instaladas mais rapidamente.
                        
                        <br />
                        
                            As estruturas metálicas podem ser <span>desmontadas e reaproveitadas.</span>
                        </p>
                        <p className="sub--title--carousel--top--info">
                            <span>Resistência:</span> O aço é mais resistente ao calor, ao desgaste, à corrosão e a outros efeitos naturais do tempo.
                        </p>

                        <p>
                            <span>A Estrutura Metálica </span>tem se apresentado como tendência mundial, e vem ganhando força para projetos de arquitetura e urbanismo. Isso se deve ao fato de que as estruturas de aço são muito versáteis, resistentes e duráveis. Além de conceder um melhor aproveitamento do espaço disponível, enriquecendo a estética e até possibilitando linhas ousadas. 
                            O acabamento em ACM garante um visual diversificado e moderno.
                        </p>

                </div>
                   
                <div className='containner'>

              

            <Carousel data-bs-theme="dark" className='carousel'>
                
            <Carousel.Item>
                    <img
                    className="d-block w-100 img"
                    src={estruturaMetalica2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>estruturaMetalica3</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img"
                    src={estruturaMetalica3}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>estruturaMetalica</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100 img"
                    src={estruturaMetalica2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>estruturaMetalica2</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={estruturaMetalicaArquitetura}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>ESTRUTURAS METALICAS NA ARQUITETURA</h5>
                    
                    </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={galpao1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>galpao1</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={galpao2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Galpão2</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={galpao3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Galpão3</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

                   

                   
                   
                </div>

                
                

               
              <div className="separador"></div>

                <div className="title" id="telhas">
                    <p>Telhas</p>
                </div>
                    
{/* 
                    <div className="sub-title">
                    
                         é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                        é simplesmente uma simulação de texto da indústria tipográfica e de impressos
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                        
                    </div> */}
                

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
                                <Link to="/TelhasGalvalume"> <Btn /></Link>
                               
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
                                <Link to="TelhasTermoAcustica" > <Btn /> </Link>                               
                            </div>                               
                        </div>
                    </div>

                    <div class="item" >
                            <div className="estrutura--metalica--tile">
                                <p>Telhas Sanduíche</p>
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
                                    <Link to="/TelhasSanduiche" > <Btn /> </Link>                                   
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
                                <div className="about--title">CLOQUE ESTRUTURAS METALICAS E TELHAS</div> <br />
                                &nbsp; É uma empresa que trabalha  à mais de 50 anos no segmento de fabricação e a montagem de estruturas metálicas e telhas de aluzinco, para coberturas de edificações que exijam um diferencial de qualidade e necessitem atender projetos de pequenos, médios e grandes portes com segurança e sofisticação.
                                <br /><br /> 
Tendo o compromisso em oferecer o melhor custo beneficio aos nossos clientes, utilizando mão de obra qualificada e equipamentos modernos, com uma vasta experiência no ramo, visando qualidade e agilidade.

                            </div>
                          
                    
                    </div>
                               
            
            <ScrollToTopButton  />
           

            </HeaderArea>
        </div>
    )
}