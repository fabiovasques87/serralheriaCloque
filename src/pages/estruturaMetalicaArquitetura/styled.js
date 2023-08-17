
import styled from "styled-components";


export const HeaderArea = styled.div `
    .carousel {
        width:50%;
        height:50%;
        margin:30px;

    }

    .containner-icon{
        display:flex;
        justify-content:center;
        align-items: center;
    }

    .carousel, img{
        width:50%;
        height:320px;
    }

    .containner{
        display: flex;
        justify-content:center;
        align-items:center;
        margin-top:30px;

        h5, p{
            color: #fff;
        }
    }

    @media (max-width: 900px){

        .carousel, img{
            width:100%;
            height:200px;
        }

        .containner-icon{
            margin-left: -70px;
        }
        
    }

`