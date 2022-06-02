import styled from 'styled-components';
import { colors } from '../global';

export const TaskContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 100px;
`;

export const TaskCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 12px;
  background-color: ${colors.highlight};
  width: 100%;
  margin: 8px 0px;
  border-radius: 16px;
  height: 100px;

  h2 {
    font-size: 1.2em;
    line-height: 1.4;
    letter-spacing: 0.5px;
    color: ${colors.secondary}
  }

  p {
    font-size: 12px;
    color: ${colors.paragraph};
    letter-spacing: 0.5px;
  }

  svg {
    font-size: 18px;
  }
`;

export const InfoDiv = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;