import styled from 'styled-components';
import { colors } from '../global';

export const Btn = styled.button`
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px ${colors.background};
  color: ${colors.background};
  font-size: 14px;
  font-weight: 600;
  outline: none;
  :active {
    padding: 2px 14px;
  }

  svg {
    margin-left: 8px;
    color: ${colors.tertiary};
  }
`