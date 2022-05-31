import styled from 'styled-components';
import { colors } from '../../global';

export const Container = styled.div`
  background-color: ${colors.background};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 280px;
    margin-bottom: 36px;
  }

  div {
    height: 150px;
    width: 280px;
    background-color: ${colors.highlight};
    display: flex;
    justify-content: top;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2em;
      margin-top: 16px;
      margin-bottom: 8px;
      color: ${colors.headline};
      font-weight: 700;

    svg {
      font-size: 18px;
      color: ${colors.headline};
      margin-left: 8px;
    }

    }

    h1 {
      font-size: 1.2em;
      color: ${colors.headline};
      margin: 0;
      font-weight: 700;
      margin-bottom: 16px;
    }
  }
`