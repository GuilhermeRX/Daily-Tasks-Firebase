import styled from 'styled-components';
import { colors } from '../global';

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
  height: 240px;
  width: 100%;
  padding: 24px;
  margin: auto;
  margin-top: 16px;
`;

export const GridOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1.4fr;
  grid-gap: 18px;

  div {
    background: rgba(159,165,248,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    flex-direction: column;

    h1 {
      font-size: 2em;
      color: ${colors.main};
      line-height: 1.2;
    }

    p {
      font-size: 14px;
      color: ${colors.main};
      letter-spacing: 0.5px;
      font-weight: 300;
    }
  }
`;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.4fr 2fr;
  grid-gap: 18px;
  
  div {
    background: rgba(159,165,248,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    flex-direction: column;

    h1 {
      font-size: 2em;
      color: ${colors.main};
      line-height: 1.2;
    }

    p {
      font-size: 14px;
      color: ${colors.main};
      letter-spacing: 0.5px;
      font-weight: 300;
    }
  }
`;