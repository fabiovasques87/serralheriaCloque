

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

}

.footer--left-contato{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

    footer--left--contato, p{
        font-size:12px;
    }

    .footer--right, form, input, textarea{
        font-size:12px;
        color: #fff;
 
    }
}

`

