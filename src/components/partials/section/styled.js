import styled from 'styled-components';

export const HeaderArea = styled.div `


    .separador{
        margin-top: 50px;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }

    .title{
     
        margin-top:50px;
        margin-bottom:50px;
      
        p{
            font-size:32px;
            font-weight: bold;
            text-align: center;
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
            width:490px;
            height:200px;
        }

        .efeito{
            position: absolute;
            background-color: rgba(72,69,56, 0.9);
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-transform:uppercase;
           
           
            
        }

        .efeito:hover{
            display: flex;
        }
      
    }

    .item{

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        text-align: center;
        height: 500px;
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
        
        .estrutura--metalica--img {
            position: relative;


            img{
                width:490px;
                height:200px;
            }
      
            .efeito {
                position: absolute;
                top: 0;
                left: 0;            
                margin-left: 50%;
                transform: translateX(-50%);
                background-color: rgba(72, 69, 56, 0.1);
                width: 70%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #fff;
                text-transform: uppercase;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
      
            &:hover .efeito {
              opacity: 1;
            }
        }
        .icon{
            font-size:60px;
            color:#008000;
        }
        
        @media (max-width: 700px){

           .sub-title {
                font-size:12px;
                background-color: red;
            }

            .estrutura--metalica--img img{
                width: 350px;
            }

           
            .btn--2{
                width:100%;
            }

         
           
          
            .estrutura--metalica--img  .efeito{
                width: 100%;
            }
          
      }

   

`