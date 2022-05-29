import styled from 'styled-components'

export const Barra = styled.nav`
display: flex;
justify-content: space-between;
background-color: red;
padding: .4rem;
width: 100%;
@media (max-width:768px){
    height: 77px;
}
    .icono_div{      
       display: flex;         
        width: 45px;
        height: 45px;
            .icono_img{
            border-radius: 50%;
            background-color: white; 
            border: 1px solid white;
            width: 100%;
            height: 100%;
            position: relative;
            top:10px;
            left: 10px;
        }        
    }
    .container_options{
    display: flex;  
    justify-content:center ;  
    align-items:center ;
    text-decoration: none;      
        .options{
            display: flex;
            margin-right:1rem;
            text-decoration: none;
            justify-content: space-between;
            font-size: 20px;
            font-weight: bold;
            color: white;  
            border: 1px solid transparent;  
            border-radius:4px ;
            &:hover{
                background: linear-gradient( 135deg, #FD6E6A 10%, #FFC600 100%);                
            }    
      }
      @media (max-width: 768px){
          display: none;
      }
    }
    .container_buttons{
        display: flex;
        justify-content: center;
        align-items: center; 
        .buttons{
            margin-left: 6px;
            font-weight: bold;
            border: 2px solid white;            
            background: rgb(2,0,36);
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(244,124,124,1) 0%, rgba(251,62,37,0.9220063025210083) 100%, rgba(0,212,255,1) 100%);
            &:hover{
                background: linear-gradient( 135deg, #FD6E6A 10%, #FFC600 100%);               
            }
        }       
        @media (max-width:769px)  {
            display: none;
        }           
    }
   .burger{
         position: relative;
         width: 50px;
         height: 40px;
         top: 8px;
         color: white;  
       @media (min-width:768px)  {
         display: none;
         position: relative;
         width: 50px;
         height: 40px;
         top: 8px;
         color: white;                        
       }   
       .burger_icon{
             width: 100%;
             height: 100%;
       }      
   }
`








