

import logo1 from '../../../img/Background.jpg';



import styled from 'styled-components';

export const HeaderArea = styled.div `

   .menu{
      .text, p{
         font-family: SQUARED, serif;

      }

        display:flex;
        justify-content:space-around;
        align-items: center;
       
        background-image: url(${logo1});
        background-repeat: no-repeat, repeat;
        background-size: cover;
        color: #fff;
        padding:20px;
        height:20rem;
        font-size:22px;
        font-weight: bold;
        

   

        .menu, .logo1 ,img{
         // width:100px;
        }
   }

   .menu--menu ul,li{
      cursor: pointer;
      list-style:none;
      display:flex;
      margin:10px;
      font-size:18px;
   }

.menu--menu{
   // background-color: red;

}


   @media (max-width: 600px){
      .menu--menu ul,li ,  .text{
         font-size:14px;
      }

      .menu{
<<<<<<< HEAD
         height:50%;
         background-size: cover;
         
      }

      .text p {
         font-size:20px;
=======
         height:150px;
      }

      .text p {
        display: none;
>>>>>>> c7de37e2fa984c28b9bc3f6d38a20708c33f65ad
      }

      .menu, .logo1 ,img{
          width: 100%;
        }
   }

`

