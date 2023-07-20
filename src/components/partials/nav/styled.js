


import styled from 'styled-components';

export const HeaderArea = styled.div `

   .menu{
      .text, p{
         font-family: SQUARED, serif;

      }

        display:flex;
        justify-content:space-around;
        align-items: center;
       

        color: #fff;
        background-color: #423FE8;
        padding:20px;
        height:6rem;
        font-size:22px;
        font-weight: bold;

      //   .menu, .logo1 ,img{
      //    width:200px;
      //    height:100px;
      //   }

      .logo1, title--nav{
         font-family: 'Saira Semi Condensed', sans-serif;
         font-weight: 600;
         
      }

      .title--nav{
         font-family: 'Saira Semi Condensed', sans-serif;
         font-weight: 600;
         font-size:43px;
         letter-spacing: 18px;

      }
     
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
         height:150px;
      }

      .text p {
        display: none;
      }
   }

`

