import styled from 'styled-components';
import { colors } from '../../global';


export const PageLogin = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(255,255,255);
  background: linear-gradient(170deg, rgba(255,255,255,1) 0%, rgba(220,233,246,1) 35%);
`;


export const Container = styled.div`
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  div {
    height: 180px;
    width: 320px;
    background-color: ${colors.highlight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;

    h1 {
      font-size: 1.4em;
      letter-spacing: 0.5px;
      color: ${colors.headline};
      margin: 0;
      font-weight: 700;
      margin-bottom: 16px;
    }

    p {
      color: ${colors.headline};
      letter-spacing: 0.5px;
      width: 300px;
      text-align: center;
      margin-bottom: 24px;
    }
  }
`
