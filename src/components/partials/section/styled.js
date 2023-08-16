import styled from 'styled-components';

export const HeaderArea = styled.div `

  

    .separador{
        margin-top: 10px;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }

    .title{
     
        // font-family: SQUARED, serif;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        margin-top:10px;
        margin-bottom:10px;
      
        p{
            // font-family: SQUARED, serif;
            font-family: 'Roboto', sans-serif;
            font-size:30px;
            text-align: center;
        }

      
        
        
    }
    .sub-title{
        font-size:16px;
        text-align: justify;
        margin-bottom:50px;
        // font-family: SQUARED, serif;
        font-family: 'Roboto', sans-serif;
        margin-left:10px;
        margin-right:10px;

    }

    .section--services{
        font-family: 'Roboto', sans-serif;
        // font-family: SQUARED, serif;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-gap: 20px;
        margin-top:10px;

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

        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        padding: 20px;
        text-align: center;
        height: 620px;
        border: 1px solid #fff;

        .btn{
            // margin-top: auto;
            display: flex;
            justify-content: center;
            align-items:center;
           
        }

        .estrutura--metalica--tile p {
            font-size:20px;
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
        }

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

        .about{
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 32px;
            text-transform: uppercase;
            font-family: 'Roboto', sans-serif;
            font-weight:500;
            margin-top:30px;
        }
        .about--items{
            display: flex;
            justify-content: space-around;
            align-items: center;


            .logo--about, img{
                height: 300px;
            }
            .about--texto{
                text-align: justify;
                margin-right:50px;
                margin-left:50px;


                .about--title{
                    text-align: justify;
                    font-weight:500;
                    font-size: 22px;
                    font-family: 'Roboto', sans-serif;

                }
            }
        }
        
        @media (max-width: 900px){

         .title, p{
            
         }

            .estrutura--metalica--img img{
                width: 350px;
            }

           
            .btn--2{
                width:100%;
            }

            .sub-title {
             
                font-size:14px;
                margin-left: 10px;
                margin-right:10px;
            }
           
            .about--items{
                flex-direction: column;
            }

            .logo--about, img{
                width: 350px;
            }
          

            .about--title{
                text-align:center;
                font-size:14px;
                font-weight:500;
            }
            
          
           
      }

   

`