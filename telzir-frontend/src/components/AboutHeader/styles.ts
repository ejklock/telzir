import styled from 'styled-components';

export const HeaderTitle = styled.div`
  width: 60%;
  h1 {
    font-weight: 700;
    font-family: 'Roboto';
    line-height: 1.158;
    letter-spacing: -0.8px;

    margin-top: 0;
    color: #000;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;

    line-height: 1.444;
    letter-spacing: -0.2px;
    margin-top: 0;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  a {
    width: 220px;
    height: 60px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;
    font-size: 18px !important;
    background: #243062;

    :hover {
      background: #b3bcec;
    }
  }

  @media (max-width: 600px) {
    width: 100%;

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  justify-items: center;

  svg {
    margin: 15px;
    width: 30%;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    svg {
      margin: 15px;
      width: 80%;
    }
  }
`;

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  align-items: center;
  justify-content: center;
`;
