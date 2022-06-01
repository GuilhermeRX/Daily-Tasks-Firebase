import styled from 'styled-components';
import { colors } from '../global';

export const Input = styled.input`
  margin: 4px 0px;
  padding: 8px 8px;
  font-size: 14px;
  font-weight: 100;
  color: ${colors.background};
  border: none;
  box-shadow: 2px 2px 12px rgba(0,0,0,0.32);
  outline: none;
  border-radius: 8px;
`;