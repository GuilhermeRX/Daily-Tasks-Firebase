import styled from 'styled-components';
import { colors } from '../global';

export const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 36px;

  h1 {
    font-size: 1.4em;
    margin-bottom: 36px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: ${colors.background}
  }

  img {
    width: 100px;
    border-radius: 50%;
    margin-bottom: 24px;
  }

  p {
    font-size: 1em;
    letter-spacing: 0.5px;
    color: ${colors.background};
    line-height: 1.4;
  }

`;
