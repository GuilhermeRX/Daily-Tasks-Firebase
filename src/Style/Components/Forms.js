import styled from 'styled-components';
import { colors } from '../global';

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: max-content;

  label {
    margin: 4px 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;
    font-weight: 100;
    color: ${colors.background}
  }
`