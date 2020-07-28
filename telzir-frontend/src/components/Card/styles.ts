import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 30px;
  margin-bottom: 10px;
  a {
    text-decoration: none;
  }
  a:hover {
    background: #b3bcec;
    border-radius: 5px;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const MediaIconText = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  svg {
    width: 65px;
    height: 65px;
    margin: 10px;
    fill: #484747;
    stroke: transparent;
    text {
      display: none;
    }
    .a,
    .cls-1 {
      fill: #fff;
    }
  }
`;
export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 270px;
  height: 300px;
  padding: 15px;
  background: #dcdcdc 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  justify-content: center;
  h3 {
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 20px;
    text-decoration: none;
    color: #484747;
    text-align: center;
  }
  p {
    font-family: 'Rubik';
    font-weight: 300;
    text-align: left;
    font-size: 15px;
    text-align: center;
    padding: 0px;
    padding-top: 10px;
    line-height: 20px;
    letter-spacing: 0;
    color: #484747;
    opacity: 1;
  }
  @media (max-width: 600px) {
    justify-content: center;
    width: 340px;
  }
`;
