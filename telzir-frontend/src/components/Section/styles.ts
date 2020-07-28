import styled from 'styled-components';

interface SectionProps {
  background?: string;
  direction?: string;
  padding?: string;
}

export const Container = styled.section`
  background-color: ${(props: SectionProps) =>
    props.background ? props.background : '#fff'};
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props: SectionProps) =>
    props.direction ? props.direction : 'column'};
  align-items: center;
  padding: 30px;
  align-content: center;
  p {
    font-family: 'Rubik';
    font-size: 14px;
  }
  a,
  button {
    margin-top: 30px;
    width: 200px;
    height: 60px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;
    border: 0;
    font-size: 14px;
    background: #28a745;

    :hover {
      background: #b3bcec;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: ${(props: SectionProps) =>
      props.direction ? props.direction : 'column'};
    align-items: flex-start;
    align-content: flex-start;
    padding: ${(props: SectionProps) =>
      props.padding ? props.padding : '30px'};
    padding-top: 30px;
    p {
      font-family: 'Rubik';
      font-weight: 400;
      padding-left: 5px;

      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    a,
    button {
      width: 200px;
      height: 60px;
      padding: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      -webkit-box-align: center;
      align-items: center;
      color: #fff;
      border: 0;
      font-size: 18px;
      background: #28a745;

      :hover {
        background: #b3bcec;
      }
    }
  }
`;

export const SectionIcon = styled.div`
  flex-direction: column;
  text-align: center;
  padding-bottom: 20px;
  scroll-padding-left: 20px;
  h1 {
    font-family: 'Rubik';
    font-size: 1.5em;
    color: #28166f;

    line-height: 13px;
    font-weight: bold;
  }
  svg {
    margin-top: 10px;
    width: 59px;
    height: 42px;
    fill: #28166f;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-family: 'Rubik';
      font-size: 2.5rem;
      color: #28166f;
      line-height: 42px;
      font-weight: bold;
    }
    svg {
      width: 239px;
      height: 171px;
      fill: #28166f;
    }
  }
`;
