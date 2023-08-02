
import styled from 'styled-components';

export const HeaderArea = styled.div ` 


.me-auto {
   
    font-size:14px;
}

.menu-item{
    margin-right:10px;
    margin-left:10px;
   
}
.nav{
    background: rgba(0.2, 0.5, 0.8, 0.8);
}
a{
    text-decoration: none;
    color: #fff;
    text-transform: uppercase
}


@media (max-width: 800px){
    .nav{
        color: #000;
        background-color: #fff;
        margin-top: 2px;
    }

    .nav:hover{
      background-color
    }
  
    a{
        color: #000;
        font-size:12px;
    }
    a:hover{
        color: #ccc;

    }

 

    .me-auto {
   
        width: 180px;
        height: 130px;
    }
 

`