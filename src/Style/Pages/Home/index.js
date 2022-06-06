import styled from 'styled-components';
import { colors } from '../../global';

export const DivHome = styled.div`
  background: rgb(113,98,221);
  background: linear-gradient(150deg, rgba(113,98,221,1) 2%, rgba(68,49,174,1) 35%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Title = styled.h1`
  align-self: flex-start;
  margin-left: 24px;
  color: ${colors.main};
  font-size: 1.6em;
`;