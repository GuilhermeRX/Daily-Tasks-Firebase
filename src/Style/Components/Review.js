import styled from 'styled-components';
import { colors } from '../global';

export const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  height: 240px;
`;

export const GridOne = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1.5fr;
  grid-gap: 16px;
  div {
    background: rgba(159,165,248,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
  }
`;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 2fr;
  grid-gap: 16px;
  
  div {
    background-color: ${colors.paragraph};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
  }
`;