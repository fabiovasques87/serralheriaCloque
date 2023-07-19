

import styled from 'styled-components';

export const HeaderArea = styled.div `

   .menu{

        display:flex;
        justify-content:space-around;
        align-items: center;
       

        color: #fff;
        background-color: #ccc;
        padding:20px;
        height:6rem;
        font-size:22px;
        font-weight: bold;
   }
   .menu--menu ul,li{
      cursor: pointer;
      list-style:none;
      display:flex;
      margin:10px;
      font-size:18px;
   }




   @media (max-width: 600px){
      .menu--menu ul,li ,  .text{
         font-size:14px;
      }

      .menu{
         height:200px;
      }

      .text p {
         font-size:30px;
      }
   }

`

