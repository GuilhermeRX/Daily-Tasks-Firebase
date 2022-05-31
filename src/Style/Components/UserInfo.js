import styled from 'styled-components';
import { colors } from '../global';

export const DivUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 16px;

  p {
    font-size: 1em;
    font-weight: 600;
    color: ${colors.headline};
    margin-right: 16px;
  }

  img {
    border-radius: 50%;
    width: 46px;
  }

  svg {
      font-size: 18px;
      margin-left: 4px;
      color: ${colors.headline};
    }
`
