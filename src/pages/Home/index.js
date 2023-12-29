import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
Container, BoxMenu, ListMenu, Illustration, Opening,
BottomOne, BoxSlider, Content
} from './styled';

import Logo from '../../assets/logo cris.jpg';
import Piston from '../../assets/pistao2.png';
import FigureOne from '../../assets/fundo2.png';
import Vela from '../../assets/velas.jpg';
import Oil from '../../assets/troca de oleo.jpg'
import Sistema from '../../assets/sistema-arrefecimento-manutenção-automotiva-celta-gol-peugeot.jpg-2.jpg'
import Pivo from '../../assets/pivo.jpg'
import Mola from '../../assets/mola e suspenção.jpg'
import Mangueira from '../../assets/mangueiras.jpg'
import Correia from '../../assets/correiaDentata.jpg'
import Freio from '../../assets/freio.jpg'
import Motor from '../../assets/motor.jpg'
import Mecanico from '../../assets/mecanico.png'
import Insta from '../../assets/insta gif.gif'



function App() {



  const slidesData =[
    {
      image: Vela,
      title:'Troca de Velas',
      text: ' A substituição regular das velas de ignição é importante para garantir uma ignição adequada da mistura ar-combustível, o desempenho ideal do motor, economia de combustível e redução das emissões poluentes. É recomendável seguir as recomendações do fabricante quanto ao intervalo de troca das velas de ignição, que pode variar de veículo para veículo.'
    },
    {
      image:Oil,
      title: 'Troca de Óleo',
      text:`É importante seguir as recomendações do fabricante do veículo em relação ao intervalo de troca de
      óleo. Geralmente,
      isso varia entre 5.000 e 10.000 quilômetros ou de acordo com um determinado período de tempo, como a
      cada 6 meses.
      No entanto, se você dirige em condições severas, como em tráfego intenso, em áreas poeirentas ou em
      climas extremos,
      pode ser necessário realizar a troca de óleo com mais frequência. `
    },
    {
      image:Sistema,
      title:'Sistema de Aferrecimento',
      text:`É fundamental realizar a manutenção regular do sistema de arrefecimento, incluindo a verificação do
      nível e da qualidade do líquido de arrefecimento,
      inspeção de vazamentos, limpeza do radiador e substituição do líquido de arrefecimento conforme as
      recomendações do fabricante do veículo.
      Um sistema de arrefecimento em bom funcionamento é essencial para garantir o desempenho confiável do
      motor e evitar danos graves. Portanto, é importante monitorar `
    },
    {
      image:Pivo,
      title:'Pivo e Batentes',
      text:` É recomendável seguir as recomendações do fabricante do veículo em relação à manutenção dos pivôs e
      batentes. Isso pode
      incluir a inspeção regular, a lubrificação adequada, a substituição em caso de desgaste excessivo e
      o ajuste da folga,
      se necessário. Um mecânico qualificado e experiente pode ajudar a realizar a manutenção e os reparos
      adequados nesses
      componentes, garantindo assim um desempenho seguro e confiável do veículo. `
    },
    {
      image:Mola,
      title:'Mola e Suspenção',
      text:`Recomenda-se seguir as recomendações do fabricante do veículo em relação à verificação e manutenção
      das molas e suspensão.
      Isso pode incluir a inspeção regular, a substituição em caso de desgaste excessivo e o ajuste
      adequado dos componentes.
      É importante procurar um mecânico qualificado e experiente para realizar a verificação e os reparos
      necessários,
      garantindo assim a segurança e o desempenho adequado`
    },
    {
      image:Mangueira,
      title:'Mangueiras',
      text:`Verifique regularmente o estado das mangueiras e substitua-as se apresentarem sinais de desgaste,
      danos ou vazamentos.
      É importante utilizar mangueiras de alta qualidade e adequadas para cada aplicação específica do
      veículo.`
    },
    {
      image:Correia,
      title:'Correias',
      text:`Verifique regularmente o estado das correias e substitua-as conforme o intervalo de troca
      recomendado ou se apresentarem
      sinais de desgaste, rachaduras, desgaste irregular ou tensão inadequada. É importante utilizar
      correias de alta qualidade e
      adequadas para cada aplicação específica do veículo.`
    },
    {
      image:Freio,
      title:'Freio',
      text:`Recomenda-se seguir as recomendações do fabricante do veículo em relação à manutenção dos freios.
      Isso pode incluir
      a verificação regular do desgaste das pastilhas ou sapatas de freio, a substituição adequada dos
      componentes desgastados,
      a troca do fluido de freio conforme recomendado e a inspeção geral do sistema de freio.
      Lembre-se de que a manutenção preventiva e a inspeção regular são essenciais para garantir que os
      freios estejam em boas
      condições de funcionamento`
    },
    {
      image:Motor,
      title:'Manutençoes preventivas',
      text:`É importante seguir as recomendações do fabricante em relação às manutenções preventivas do motor.
      Consulte o manual
      do proprietário para obter informações específicas sobre os intervalos de troca de óleo, filtros e
      velas de ignição.
      Além disso, é recomendado procurar um mecânico qualificado para realizar as manutenções preventivas,
      pois eles têm o
      conhecimento e as ferramentas adequadas para executar os procedimentos corretamente.`
    }
  ];

  const settings ={

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Para desativar o autoplay ao clicar no botão
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  return(
    <Container>

    <BoxMenu>
      <ListMenu>

        <ul>HOME</ul>
        <ul>ESPECIALIDADE</ul>
        <ul>CONTATOS</ul>

      </ListMenu>
      <Illustration>

    <img className='piston' src={Piston} alt='piston'/>
    <img className='logo' src={Logo} alt='logo' width='500px' height='500px'/>
    <img className='piston' src={Piston} alt='piston'/>

      </Illustration>

      <Opening> 
        Traga o seu veículo para a melhor oficina da cidade!  <br/>
            Aqui a gente cuida dele como se fosse nosso e traz para você <br/> as melhores soluções com preço justo e
            resolução dentro do prazo.<br/>
            Aqui não tem enrolação! <br/> Ligue agora e agende uma visita.<br/>(11) 4317-0709
     </Opening>
     
    </BoxMenu>

    <BottomOne>
    <img className='especialidade' src={FigureOne} alt='figura' width='98%' height='700vh' />
    <p>ESPECIALIDADE</p>
    </BottomOne>
   
    <BoxSlider>
      <div className='slider-wrapper'>
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} className='box'>
          <div className='slide-content'>
          <img src={slide.image} alt={`Slide ${index + 1}`} width='35%' />
          <div className="divSlider">
          <p className="textTitle">{slide.title}</p>
            <p className="textSlider">{slide.text}</p>
          </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
    </BoxSlider>
    <Content>
      
      <div className='insta'>
        <img src={Insta} alt='instagram' width='100px'/>

      </div>

      <div className='mecanico'>

    <img src={Mecanico} alt='mecanico' width='500px'/>   
    </div>

    </Content>
    
    </Container>


  )

}

export default App