

import logo1 from '../../../img/soldador4.jpg';



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
        height:22rem;
        font-size:22px;
        font-weight: bold;
        height: 400px;

   

        .menu, .logo1 ,img{
         margin-top: 30px;
         height:500px;
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

   @media (min-width: 601px) AND (max-width: 1024px) {

      .menu--menu{
         margin-left: -100px;
        
      }


      .menu, .logo1 ,img{
         width: 100%;
         height: 100%;
       }

       .menu{
         flex-direction: column;
         background-size: cover;
         height: 300px;

         
       }
   }

   @media (max-width: 600px){

      .menu, logo1{
         height:50px;
      }

      .menu--menu{
         margin-left: -290px;
      }

      .menu{
         flex-direction: column;
         height: 300px;

         
      }

      .menu--menu ul,li ,  .text{
         font-size:14px;
      }

    

      .text p {
         font-size:20px;
      }

      .logo, img{
          width: 100%;
         height: 70%;
        }
   }

   @media (min-width: 400px) AND (max-width: 599px) {
      .menu--menu{
         margin-left: -100px;
      }
      .menu{
         height: 300px;
         

      }
   }

`

