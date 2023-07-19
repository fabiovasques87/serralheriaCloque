
import { HeaderArea } from "./styled";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Menu = () =>{
    return (
        <div>
            <HeaderArea>

            
            {/* <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">Contato</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
          >
            <NavDropdown title="Serviços" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Tehas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Estruturas metálicas
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

<Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <NavDropdown title="Serviços" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Telhado</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Estruturas Metálicas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Galpões
              </NavDropdown.Item>
             
           
            </NavDropdown>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
          
         

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