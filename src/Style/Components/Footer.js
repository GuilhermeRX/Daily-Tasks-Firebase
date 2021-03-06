import styled from 'styled-components';
import { colors } from '../global';

export const DivFooter = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
  background-color: ${colors.main};
  box-shadow: 0px -4px 12px rgba(0,0,0,0.062);
`;