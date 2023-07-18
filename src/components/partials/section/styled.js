import styled from 'styled-components';

export const HeaderArea = styled.div `

    .separador{
        margin-top: 50px;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }

    .title{
     
      
        p{
            font-size:32px;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
        }

        .sub-title{
            font-size:16px;
            text-align: center;
            margin-bottom:50px;
        }
        
    }

    .section--services{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: 20px;
        margin-top:50px;

        img{
            width:500px;
            height:200px;
        }
    }

    .item{

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        text-align: center;
        height: 450px;
        background-color: ;
        border: 1px solid #fff;

        .btn{
            // margin-top: auto;
            display: flex;
            justify-content: center;
            align-items:center;


        }

        .estrutura--metalica--tile p {
            font-size:20px;
            font-weight: bold;
            text-transform: capitalize;
        }

        .estrutura--metalica--desc p {
            line-height: 2;
        }

        ul li {
            list-style: none;
            margin: 10px;
        }
        
       
        
    
          
      }

   

`