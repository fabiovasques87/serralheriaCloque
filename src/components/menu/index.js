
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
<<<<<<< HEAD
        <Navbar.Toggle aria-controls="navbarScroll"  style={{backgroundColor:'#fff'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',  backgroundColor:'#fff' }}
=======
        <Navbar.Toggle aria-controls="navbarScroll"  style={{backgroundColor:'#fff', fontFamily: 'SQUARED'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',  backgroundColor:'#fff',fontFamily: 'SQUARED' }}
>>>>>>> c7de37e2fa984c28b9bc3f6d38a20708c33f65ad
            navbarScroll
          >

            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sobre</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Serviços
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