

import styled from 'styled-components';

export const HeaderArea = styled.div `

.footer {
    color: #fff;
    background-color: #4B4453;
    height:250px;
    margin-top:100px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    font-family: font-family: 'Roboto', sans-serif;
   
  

}

hr {
    display: none;
}



.footer--left-contato{
    display: flex;
    flex-direction: column;
    justify-content: space-around;

   
}

   .footer--bottom {
   
    background-color: #4B4453;
    display: flex;
    justify-content:flex-end ;
    align-items: center;
   
   

}

.footer--bottom span{
    font-size:14px;
    color: #fff;
    margin-right:15px;
}

.footer--left-email{

}

.footer--right form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
}

.footer--right form input, textarea, label{
    margin: 2px;
    padding:3px;
    outline: none;
}


@media (max-width: 600px){

    .footer{
        flex-direction: column;
        height: 300px;
        margin-top:50px;
    }

    .footer--right form{
        width: 300px;
        margin-top: 0px;
    }

    hr {
        display: flex;
        border: 1px solid #FFF;
        width: 100%;
        margin-bottom:10px;
        margin-top:0px;

    }

    .footer--left-contato{
       
       
    }

    .footer--left--contato, p{
        font-size:14px;
        margin: 5px;
    }

   

    .footer--right, form, input, textarea{
        font-size:12px;
        color: #fff;
 
    }

    .footer--left--contato span{
        display: flex;
        justify-content: center;
    }

    .footer--bottom span{
        font-size:10px;
    }
    
    


}

`

