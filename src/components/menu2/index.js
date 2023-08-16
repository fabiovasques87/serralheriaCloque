
import { HeaderArea } from "./styled";

// import { Link } from "react-scroll";

import { Link } from 'react-router-dom';


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export const Menu2 = () =>{
    return (
        <div>
            <HeaderArea>




    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ maxWidth: '100%', background: '#fff' }} />
        <Navbar.Collapse id="navbarScroll">
        <Nav id="navbarScrollingDropdown"
            className="me-auto my-2 my-lg-0"
            style={{  }}
            navbarScroll
          >
            <Nav.Link>
              <Link className="menu-item"
                activeClass="active"
                to="/"                
              >     Home        
              </Link>
            </Nav.Link>


            
{/*

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
  */}
        
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