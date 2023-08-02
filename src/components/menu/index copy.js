
import { HeaderArea } from "./styled";

import { Link } from "react-scroll";

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

            
           

<Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll"  style={{backgroundColor:'#fff'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',  backgroundColor:'#fff' }}
            navbarScroll
          >

            <NavDropdown title="Menu" id="navbarScrollingDropdown">
            <NavDropdown.Item>
          <Link
            activeClass="active"
            to="estrutura-metalica"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Estruturas Metálicas
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
          <Link
            activeClass="active"
            to="telhas"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Telhas
          </Link>
        </NavDropdown.Item>

        <NavDropdown.Item>
          <Link
            activeClass="active"
            to="galpao"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Galpões
          </Link>
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