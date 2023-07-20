
import styled from 'styled-components';

export const HeaderArea = styled.div `


   .linha {
        padding: 2px;
        background-color:black;
   }
   .header--left{
        margin-top:5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #000;

     
    
    p {
        font-family: SQUARED, serif;
        font-size:18px;
    }
    
    img{
        height: 150px;
    }

    .header--right{

    }

   }

   @media(max-width: 750px){
        .header--left, img{
            width: 100%;
            height:80%;
        }
        img{
            width: 50%;
        }
   }

`

