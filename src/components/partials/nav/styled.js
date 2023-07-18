

import styled from 'styled-components';

export const HeaderArea = styled.div `

   .menu{

        display:flex;
        justify-content:space-around;
        align-items: center;
       

        color: #fff;
        background-color: #4D8076;
        padding:20px;
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
   }

`

