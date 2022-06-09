import styled from 'styled-components';
import { colors } from '../../global';

export const MyProfContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: rgb(113,98,221);
  background: linear-gradient(150deg, rgba(113,98,221,1) 2%, rgba(68,49,174,1) 35%);

  img {
    border: 4px solid ${colors.main};
  }

  h1 {
    color: ${colors.main};
  }

  p {
    color: ${colors.main};
  }
`;
