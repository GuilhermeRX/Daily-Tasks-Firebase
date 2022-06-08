import styled from 'styled-components';
import { colors } from '../global';

export const SelectContainer = styled.div`
  display: flex;
  padding: 4px 0px;
  border-radius: 16px;
  background-color: ${colors.paragraph};
  margin: 16px;
`;

export const BtnSelect = styled.button`
  background-color: ${(props) => props.status ? colors.main : 'transparent'};
  padding: 6px 16px;
  border-radius: 16px;
  color: ${colors.background};
  border: none;
  margin: 0px 4px;
`;
