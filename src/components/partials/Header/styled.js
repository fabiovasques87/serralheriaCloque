
import styled from 'styled-components';

export const HeaderArea = styled.div `

    height: 180px; 

   .linha {
        padding: 2px;
        background-color:black;
   }
   .header--left{
        margin-top:10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #EDF0F2;

     
    
    p {
        font-size:18px;
    }
    
    img{
        height: 150px;
    }

    .header--right{

    }

   }

   @media(max-width: 700px){
        .header--left, img{
            width: 100%;
            height:80%;
        }
   }

`

