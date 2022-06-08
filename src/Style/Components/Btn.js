import styled from 'styled-components';
import { colors } from '../global';

export const Btn = styled.button`
  padding: 6px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 12px rgba(0,0,0,0.32);
  color: ${colors.background};
  font-size: 14px;
  font-weight: 600;
  outline: none;
  align-self: center;
  cursor: pointer;
  :active {
    padding: 4px 14px;
  }

  svg {
    margin-left: 8px;
    color: ${colors.tertiary};
  }
`