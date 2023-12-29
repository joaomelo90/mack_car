import styled from 'styled-components';

export const Container = styled.div`
width:100vw;
height:1000vh;
background: 
linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
background-color: #131313;
background-size: 20px 20px;

`;
export const BoxMenu = styled.div`
width:100%;
height:40px;
background: 
linear-gradient(27deg, #b24242 5px, transparent 5px) 0 5px,
linear-gradient(207deg, #b24242 5px, transparent 5px) 10px 0px,
linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
background-color: #B22222;
background-size: 20px 20px;

`;
export const ListMenu = styled.li`
display:flex;
color: white;
width:100%;
height:40px;
align-items: center;
justify-content:space-around;
`;
export const Illustration = styled.div`
display:flex;
width:100%;
height:70vh;
justify-content:center;

.piston{
    margin-top:100px
}
.logo{
  border-radius: 100%;
  opacity:0.7 ;
  margin-top:10px;
}
`
export const Opening = styled.p`
    color:white;
    font-size: 30px;
   text-align: center;
   margin: -10vw 0;
   line-height: 1.9;
   margin-top:1px;
`;
export const BottomOne = styled.div`
display:flex;
margin-top: 56%;
margin-left:10px;
position: relative;

p{
    
    font-size: 50px;
    color: white;
    font-weight: bolder;
    letter-spacing: 27px;
    position:absolute;
    top: 15%;
    left:50%;
    text-align: center;
    transform: translate(-50%, -50%);
}
.especialidade{
  opacity:0.8;
  border-radius:50px;
}
`;
export const BoxSlider = styled.div`
display:flex;
justify-content: center;
align-items: center; 
height: 100vh;

.slider-wrapper {
    max-width: 90%;
    width: 100%;
  }
.box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .slide-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding:40px; 
    
  }
.textTitle{
    color:#FFFAFA;
    width:70%;
    font-size: 40px;
    font-weight:bold;
    text-align:center;
}
.textSlider{
    margin-top:6vh;
    width:70%;
    color:#F5FFFA;
   font-size: 25px;
   font-weight:bold;
   text-align:center;
}
img {
    margin-left:50px;
    margin-right: 60px;
    margin-top:10vh;
    width:50%;
    border-radius:50px;
    opacity:0.8;
  }
  
`;
export const Content = styled.div`
display:grid;
width:100%;

.insta{
    
}

.mecanico{   
display:grid;
justify-content:flex-end;
margin-right:10vw;
margin-top:-10vh;
}


`;

