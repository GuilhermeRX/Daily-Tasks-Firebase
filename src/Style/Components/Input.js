import styled from 'styled-components';
import { colors } from '../global';

export const Input = styled.input`
  margin: 4px;
  padding: 8px 8px;
  font-size: 14px;
  font-weight: 100;
  color: ${colors.background};
  border: none;
  border-left: 2px solid ${colors.background};
  box-shadow: 2px 2px 4px ${colors.background};
  outline: none;
`;