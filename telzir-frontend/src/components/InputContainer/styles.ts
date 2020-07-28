import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input,
  select {
    font-family: 'Rubik';
    font-weight: 500;
    background: rgb(255, 255, 255);
    border-width: 3px;
    border-radius: 3px;
    border-style: solid;
    border-color: #243062;
    height: 30px;
    padding: 5px;
    margin-top: 15px;
    font-size: 14px;
  }
`;
