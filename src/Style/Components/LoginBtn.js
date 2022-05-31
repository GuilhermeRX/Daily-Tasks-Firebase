import styled from "styled-components";
import { fontColors } from "../global";


const LoginBtn = styled.button`
  display: flex;
  border: none;
  color: ${fontColors.primary};
  background-color: ${fontColors.secondary};
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  :active {
    padding: 6px 22px;
  }
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }
`


export default LoginBtn;