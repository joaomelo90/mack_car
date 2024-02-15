import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import {
  Container, ContainderBox, Opening,Span,
  TextSpan, Box, MapItem, ContentIcon, TitleIcon, IconContainer, BoxTwo, Address,BoxThree,Dev
} from './styled';
import Map from '../../map'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CarRepairIcon from '@mui/icons-material/CarRepair';

import Logo from '../../assets/logo cris.jpg';
import Vela from '../../assets/velas.jpg';
import Oil from '../../assets/troca de oleo.jpg'
import Sistema from '../../assets/sistema-arrefecimento-manutenção-automotiva-celta-gol-peugeot.jpg-2.jpg'
import Pivo from '../../assets/pivo.jpg'
import Mola from '../../assets/mola e suspenção.jpg'
import Mangueira from '../../assets/mangueiras.jpg'
import Correia from '../../assets/correiaDentata.jpg'
import Freio from '../../assets/freio.jpg'
import Motor from '../../assets/motor.jpg'
import gif from '../../assets/gif mecanica.gif'
import insta from '../../assets/insta gif.gif'
import face from '../../assets/Facebook Icon.gif'
import tel from '../../assets/telgif.gif'
import zap from '../../assets/zap.gif'


function App() {



  const slidesData = [
    {
      image: Vela,
      title: 'Troca de Velas',
      text: ' A substituição regular das velas de ignição é importante para garantir uma ignição adequada da mistura ar-combustível, o desempenho ideal do motor, economia de combustível e redução das emissões poluentes. É recomendável seguir as recomendações do fabricante quanto ao intervalo de troca das velas de ignição, que pode variar de veículo para veículo.'
    },
    {
      image: Oil,
      title: 'Troca de Óleo',
      text: `É importante seguir as recomendações do fabricante do veículo em relação ao intervalo de troca de
      óleo. Geralmente,
      isso varia entre 5.000 e 10.000 quilômetros ou de acordo com um determinado período de tempo, como a
      cada 6 meses.
      No entanto, se você dirige em condições severas, como em tráfego intenso, em áreas poeirentas ou em
      climas extremos,
      pode ser necessário realizar a troca de óleo com mais frequência. `
    },
    {
      image: Sistema,
      title: 'Sistema de Aferrecimento',
      text: `É fundamental realizar a manutenção regular do sistema de arrefecimento, incluindo a verificação do
      nível e da qualidade do líquido de arrefecimento,
      inspeção de vazamentos, limpeza do radiador e substituição do líquido de arrefecimento conforme as
      recomendações do fabricante do veículo.
      Um sistema de arrefecimento em bom funcionamento é essencial para garantir o desempenho confiável do
      motor e evitar danos graves. Portanto, é importante monitorar `
    },
    {
      image: Pivo,
      title: 'Pivo e Batentes',
      text: ` É recomendável seguir as recomendações do fabricante do veículo em relação à manutenção dos pivôs e
      batentes. Isso pode
      incluir a inspeção regular, a lubrificação adequada, a substituição em caso de desgaste excessivo e
      o ajuste da folga,
      se necessário. Um mecânico qualificado e experiente pode ajudar a realizar a manutenção e os reparos
      adequados nesses
      componentes, garantindo assim um desempenho seguro e confiável do veículo. `
    },
    {
      image: Mola,
      title: 'Mola e Suspenção',
      text: `Recomenda-se seguir as recomendações do fabricante do veículo em relação à verificação e manutenção
      das molas e suspensão.
      Isso pode incluir a inspeção regular, a substituição em caso de desgaste excessivo e o ajuste
      adequado dos componentes.
      É importante procurar um mecânico qualificado e experiente para realizar a verificação e os reparos
      necessários,
      garantindo assim a segurança e o desempenho adequado`
    },
    {
      image: Mangueira,
      title: 'Mangueiras',
      text: `Verifique regularmente o estado das mangueiras e substitua-as se apresentarem sinais de desgaste,
      danos ou vazamentos.
      É importante utilizar mangueiras de alta qualidade e adequadas para cada aplicação específica do
      veículo.`
    },
    {
      image: Correia,
      title: 'Correias',
      text: `Verifique regularmente o estado das correias e substitua-as conforme o intervalo de troca
      recomendado ou se apresentarem
      sinais de desgaste, rachaduras, desgaste irregular ou tensão inadequada. É importante utilizar
      correias de alta qualidade e
      adequadas para cada aplicação específica do veículo.`
    },
    {
      image: Freio,
      title: 'Freio',
      text: `Recomenda-se seguir as recomendações do fabricante do veículo em relação à manutenção dos freios.
      Isso pode incluir
      a verificação regular do desgaste das pastilhas ou sapatas de freio, a substituição adequada dos
      componentes desgastados,
      a troca do fluido de freio conforme recomendado e a inspeção geral do sistema de freio.
      Lembre-se de que a manutenção preventiva e a inspeção regular são essenciais para garantir que os
      freios estejam em boas
      condições de funcionamento`
    },
    {
      image: Motor,
      title: 'Manutençoes preventivas',
      text: `É importante seguir as recomendações do fabricante em relação às manutenções preventivas do motor.
      Consulte o manual
      do proprietário para obter informações específicas sobre os intervalos de troca de óleo, filtros e
      velas de ignição.
      Além disso, é recomendado procurar um mecânico qualificado para realizar as manutenções preventivas,
      pois eles têm o
      conhecimento e as ferramentas adequadas para executar os procedimentos corretamente.`
    }
  ];

  const settings = {

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



  return (
    <Container>
      <ContainderBox>

        <img className='logo' src={Logo} alt='logo'  />

      </ContainderBox>

      <Opening>
        Traga o seu veículo para a melhor oficina mecânica da cidade!  <br />
        Aqui a gente cuida dele como se fosse nosso e traz para você <br /> as melhores soluções com preço justo e
        resolução dentro do prazo.<br />
        Aqui não tem enrolação! <br /> Ligue agora e agende uma visita.<br />(11) 4317-0709 / (11) 97608-6281
      </Opening>


      <Box>
        <p className='title'>Como a <TextSpan>Mack Car</TextSpan> podemos te ajudar</p>
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
      </Box>

      <ContentIcon>
        <p className='contentText'>O MELHOR LUGAR PARA DEIXAR SEU VEICULO!</p>


        <IconContainer>
          <div className='icon'>
            <ThumbUpIcon style={{ color: '#A8000B', width: '100px', height: '100px' }} />
            <TitleIcon>confiabilidade</TitleIcon>
          </div>
          <div className='icon'>
            <PsychologyIcon style={{ color: '#A8000B', width: '100px', height: '100px' }} />
            <TitleIcon>Profissional Qualificado</TitleIcon>
          </div>
          <div className='icon'>
            <MonetizationOnIcon style={{ color: '#A8000B', width: '100px', height: '100px' }} />
            <TitleIcon>Preços Acessíveis</TitleIcon>
          </div>
          <div className='icon'>
            <CarRepairIcon style={{ color: '#A8000B', width: '100px', height: '100px' }} />
            <TitleIcon>Equipamentos Modernos</TitleIcon>
          </div>
        </IconContainer>
      </ContentIcon>

      <BoxTwo>

       
        <p className='textDescription'>
        <Span>Quem Somos</Span> <br/><br/> Somos a oficina mecânica <TextSpan>Mack Car</TextSpan> , especializada em carros nacionais e importados a gasolina e álcool. Com experiência e profissionalismo, oferecemos serviços de manutenção e reparo de qualidade para garantir o melhor desempenho do seu veículo. Confie em nós para cuidar do seu carro como se fosse nosso.
        </p>
        <div className='gif'>
          <img src={gif} alt='gif' />
        </div>

      </BoxTwo>

      <MapItem>
      <Address>
          <p className='titleAddress'>
            Endereço:
          </p>
          <p className='textAddress'>
            R. min. Frederico Barreto, 480 - Bairro dos Casas.< br/>
            São Bernardo do Campo - SP.
          </p>
          <p className='titleTime'>
            Horários:
          </p>
          <p className='textTime'>
          Segunda a Sexta, das 8:00 às 18:00.<br/>
          Sábado de 08:00 às 13:00.
          </p>
        </Address>
        <Map />
      </MapItem>
       
       <BoxThree>
        <div className='networks'>
        <a href="https://www.instagram.com/oficinamecanicamackcar/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt='instagram'  />
          <p >@oficinamecanicamackcar</p>
          </a>

          <a href=" https://www.facebook.com/cristianojuliogomessantos.julio" target="_blank" rel="noopener noreferrer">
          <img src={face} alt='facebook'  />
          <p>Cristiano julio julio</p>
          </a>

          <a href="tel:+551143170709">
          <img src={tel} alt='telefone'  />
          <p>(11) 4317-0709</p>
              </a>

              <a href="tel:+5511976086281">
          <img src={zap} alt='whatsapp'  />
              <p>(11) 97608-6281</p>
              </a>

        </div>
       </BoxThree>
       <Dev>
       <a href=" https://www.linkedin.com/in/joao-paulo-moreira-melo/" target="_blank" rel="noopener noreferrer">   
              <p>Dev João Melo</p>
              </a>
       </Dev>

      

    </Container>


  )

}

export default App