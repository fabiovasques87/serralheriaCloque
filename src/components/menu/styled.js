
import styled from 'styled-components';

export const HeaderArea = styled.div ` 

*{margin: 0; padding: 0;}

body{
font-family: arial, helvetica, sans-serif;
font-size: 12px;
}

.menu{
list-style:none;
float:left;
}

.menu, ul, li, a{
    color:#fff;
 }

.menu li{
    position:relative;
    float:left;
    border-right:1px solid #c0c0c0;
    }


    .menu li a{color:#333; text-decoration:none; padding:5px 10px; display:block;}

.menu li a:hover{
background:#333;
color:#fff;
}


.menu li  ul{
    position:absolute;
    top:25px;
    left:0;
    background-color:#fff;
    display:none;
    }

    .menu li:hover ul, .menu li.over ul{display:block;}

    .menu li ul li{
        border:1px solid #c0c0c0;
        display:block;
        width:150px;
        }

  

`

