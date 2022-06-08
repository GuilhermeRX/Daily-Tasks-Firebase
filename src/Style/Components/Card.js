import styled from 'styled-components';
import { colors } from '../global';

export const TaskContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 120px;
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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      margin-right: 4px;
    }
  }
`;

export const StartTask = styled.span`
  position: absolute;
  right: 20%;
  margin-top: -108px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: 22px;
    color: ${colors.main};
    margin: 2px;
    cursor: pointer;
  }
`;

export const Done = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -28px;
  
  p {
    font-size: 12px;
    color: ${colors.paragraph};
    letter-spacing: 0.5px;
  }
`;
