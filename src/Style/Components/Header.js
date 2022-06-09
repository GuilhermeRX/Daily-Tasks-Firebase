import styled from 'styled-components';
import { colors } from '../global';

export const Container = styled.header`
  width: 100%;
  justify-content: center;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  height: 300px;
  flex-direction: column;
  overflow: hidden;

  h1 {
    font-size: 2.2em;
    color: ${colors.main};
    letter-spacing: 0.5px;
  }

  p {
    font-size: 14px;
    color: ${colors.paragraph};
    letter-spacing: 0.5px;
  }

  span {
    margin: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.headline};
    font-size: 1em;
    font-weight: 700;
  }

  svg {
    font-size: 24px;
    margin-left: 8px;
    color: ${colors.headline}
  }
`