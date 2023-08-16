

import { HeaderArea } from "./styled";

import React from "react";
import { Link } from "react-scroll";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const ScrollToTopButton = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        padding: "10px",
        // backgroundColor: "#007bff",
        color: "#000",
        borderRadius: "50%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link
        activeClass="active"
        to="navbarScrollingDropdown"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >

<FontAwesomeIcon icon={faArrowUp} />

    </Link>

<HeaderArea>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          cursor: "pointer",
          fontSize: '55px',
          color: 'green',
          
        }}
      >

        <a href="https://wa.me/53999010150" >
         <FontAwesomeIcon icon={faWhatsapp} />
        </a>


      </div>

      </HeaderArea>

    </div>

      

  );
};

export default ScrollToTopButton;
