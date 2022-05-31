import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 80px;
  flex-direction: column;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    font-size: 1em;
    font-weight: 100;

    svg {
      margin-left: 8px;
      font-size: 18px;
    }
  }
`