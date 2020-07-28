import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import NavBar from '../NavBar';
import { ReactComponent as People } from '../../assets/img/people.svg';
import { Container, HeaderTitle, AboutContainer } from './styles';

const AboutHeader: React.FC = () => {
  return (
    <>
      <NavBar open={false} background="#243062" />
      <Container>
        <AboutContainer>
          <HeaderTitle>
            <h1>A Telzir conecta você ao seu mundo</h1>
            <p>
              Conheça nossos planos e selecione o que mais se encaixa no seu
              perfil de uso. Temos preços e condições competitivas
            </p>
            <Link
              activeClass="active"
              to="nossosplanos"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              Conheça nossos Planos
            </Link>
          </HeaderTitle>
          <People />
        </AboutContainer>
      </Container>
    </>
  );
};

export default AboutHeader;
