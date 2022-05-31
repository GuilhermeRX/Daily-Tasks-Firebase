import styled from 'styled-components';
import { colors } from '../global';

export const MyTable = styled.table`
  width: 100%;
  padding: 16px;
`

export const TableHead = styled.thead`
  background-color: ${colors.highlight};
  color: ${colors.main};
  text-align: center;

  tr {
    height: 1.6em;
  }
`;

export const TableBody = styled.tbody`
  text-align: center;
  background-color: ${colors.secondary};
  font-size: 16px;
  color: ${colors.background};
  tr {
    text-align: center;
    height: 1.4em;
  }
`;

