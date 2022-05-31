import styled from 'styled-components';
import { colors } from '../global';

export const Container = styled.header`
  width: 100%;
  background-color: ${colors.background};
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
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