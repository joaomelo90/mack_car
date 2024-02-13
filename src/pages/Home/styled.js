import styled from 'styled-components';
import MotorLogo from '../../assets/_4946cd4b-7b42-4431-8248-3f7659790b5b.jpg'

export const Container = styled.div`
width:100%;
height:100%;
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
export const ContainderBox = styled.div`
background: url(${MotorLogo});
background-repeat: no-repeat;
background-size: cover;
opacity: 0.7;

  width: 100%;
  height: 97vh;

  display:flex;
justify-content:center;


.logo{
  border-radius: 100%;
  opacity:0.9 ;
  margin-top:2%;
  width:60%; 
  height:90%;
}
@media screen and (min-width: 320px) and (max-width: 480px) {
.logo{
  width:420px; 
  height:420px;
  margin-right:15px;
  margin-top:90px;

}
}
  
`
export const Opening = styled.p`
    color:white;
    font-size: 2rem;
   text-align: center;
   margin: -10vw 0;
   line-height: 1.9;
   margin-top:1px;
   
   @media  screen and  (min-width: 320px) and (max-width: 480px) {
    font-size: 17px;
    margin-right:13px;
   }
   @media  screen and  (min-width: 481px) and (max-width: 768px){
    font-size: 26px;
    margin-top: 28px;
   }
`;
export const Box = styled.div`
background:#151515;
width:100%;
height:102vh;

margin-top: 150px;

position: relative;

display:flex;
justify-content: center;
align-items: center; 

.title{
    
    font-size: 40px;
    color: white;
    font-weight: bolder;
       position:absolute;
    top: 7%;
    left:50%;
    text-align: center;
    transform: translate(-50%, -50%);
}


.slider-wrapper {
    max-width: 90%;
    width: 100%;
  }
.box {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-top:150px;
  }
  
  .slide-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding:40px; 
    
  }
.textTitle{
    color:#FFFAFA;
    width:110%;
    font-size: 40px;
    font-weight:bold;
    text-align:center;
}
.textSlider{
    margin-top:6vh;
    width:100%;
    color:#F5FFFA;
   font-size: 25px;
   font-weight:bold;
   text-align:center;
   margin-right:50%
}
img {
    
    margin-top:10vh;
    width:50%;
    border-radius:50px;
    opacity:0.8;
  }

  @media  screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 68px;
    height:110vh;

    .slick-prev:before{
      margin-left:10px;
    }
    .slick-next:before {
      margin-left: -46px;
    }
  
    .title{
      margin-top:10px;
  font-size: 20px;
    }
    .textSlider{
  font-size: 19px;
}
img{
  width:59vw;
  margin-top: 20px;
}
.slide-content{
  display:flex;
  flex-direction:column;
}
.textTitle{
  font-size: 27px;
}
  }
  @media  screen and (min-width: 501px) and (max-width: 800px) {
    margin-top: 78px;
    height:90vh;
.title{
  margin-top:15px;
  font-size: 30px;
}
.textSlider{
  font-size: 16px;
}
.textTitle{
  font-size: 30px;
}

  }
  @media  screen and (min-width: 1200px) and (max-width: 1400px) {
  
}
`;
export const TextSpan = styled.span`
  color: red;
`;
export const Span = styled.span`
font-size:40px;

@media screen and (min-width: 320px) and (max-width: 480px) {
  font-size:30px;

}

`

export const ContentIcon = styled.div`
display:flex;
align-items:center;
flex-direction:column;

.contentText{
color:#ffffff;
font-size: 30px;
padding-top:30px;
font-weight:bold;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  .contentText{
    font-size: 17px;
 } 

}

@media screen and (min-width: 501px) and (max-width: 800px) {
 .contentText{
  font-size: 28px;
 } 
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {

  .icon{
   margin-left:70px;
  }
}
`
export const IconContainer = styled.div`
display:flex;
align-items:center;
padding: 80px;
gap:100px;

.icon{
  display:flex;
  align-items:center;
    flex-direction:column;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
display:flex;
flex-direction:column;
padding: 15px;
gap: 25px;

}


@media screen and (min-width: 501px) and (max-width: 800px) {
gap: 37px;
padding: 23px;
}
`
export const BoxTwo = styled.div`
background:#151515;
width:100%;
height:85vh;
position: relative;

display:flex;
justify-content: center;
align-items: center; 
p{
 
    color: white;
    font-weight: bolder;
       position:absolute;
    top: 5%;
    left:50%;
    text-align: center;
    transform: translate(-50%, -50%);

    line-height: 1.5;
    font-size: 35px;
    margin-top:15%;
}

.gif{
  opacity:0.8;
  margin-top:74%;
  height:700px;
    
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  height: 83vh;


  .textDescription{
    font-size: 22px;
    line-height: 1.1;
    margin-top: 47%;
  }
  .gif{
    display:flex;
    justify-content:center;
    height:50px;
    margin-top:97%;
  }

}

@media screen and (min-width: 481px) and (max-width: 768px) {
  height: 88vh;
  .textDescription{
    font-size: 29px;
    line-height: 1.1;
    margin-top: 239px;
  }
  .gif{
    display:flex;
    justify-content:center;
    height:50px;
    margin-top:60%;
  }
  p{
    font-size: 36px;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {
  height:100vh;
  .gif{
    margin-bottom:300px;
    margin-top:107%;
  }
  .textDescription{
    margin-top:17%;
  }

}
`
export const TitleIcon = styled.p`
color:#ffffff;
font-size:30px;

`
export const MapItem = styled.div`
margin:35px 200px 0 0;
display:flex;
justify-content:end;

@media (min-width: 370px) and (max-width: 500px) {
  margin:35px 20px 0 0;

}

@media (min-width: 501px) and (max-width: 800px) {
  margin:35px 40px 0 0;
}

`;
export const Address = styled.div`
display:flex;
flex-direction:column;
margin-right:300px;

.titleAddress, .titleTime{
  color:red;
  font-size:20px;
  margin-left:15px;
  font-weight:bold;

}
.textAddress, .textTime {
  color:#ffffff;
  padding:15px;
  font-size: 25px
}

@media (min-width: 370px) and (max-width: 500px) {
  margin-right:1px;
  margin-left:5px;

  .textAddress, .textTime {
    font-size: 15px
  }

}


@media (min-width: 501px) and (max-width: 800px) {
  margin-right:100px;

}

`
export const BoxThree = styled.div`
background:#151515;
width:100%;
height:25vh;
position: relative;
margin-top: 15px;



.networks{
padding:25px;
display:flex;
justify-content:space-around;

}
a{
text-decoration:none;
display: flex;
    flex-direction: column;
    align-items:center;
}
p{
  color:#ffffff;
  font-size:20px;

}
img{
  width: 100px;
  height: 100px;
}

@media (min-width: 370px) and (max-width: 500px) {
  height:15vh;
  img{
    width: 50px;
    height: 50px;
    margin-top:  -16px;
  }
  p{
    font-size: 10px;
  }

}


@media (min-width: 501px) and (max-width: 800px) {
  img{
    width: 80px;
    height: 80px;
  }
  p{
    font-size: 16px;
  }
}
@media (min-width: 1200px) and (max-width: 1400px) {
  margin-top:40px;
}
`
export const Dev = styled.div`
background:black;
width:100%;
height:7vh;

a{
  text-decoration:none;
  display:flex;
  justify-content:center;
  
}
p{
 color: #F0AC00;
 padding:15px;
 font-size:15px;
 font-weight:bold;
}
@media (min-width: 1200px) and (max-width: 1400px) {
  height:8vh;
  margin-top:40px;
}
`