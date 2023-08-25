import styled from "styled-components"
import { vars } from "../../styles/GlobalStyle"
export const Main = styled.main`
  min-height: 100%;
  margin-left: ${vars.size_side_bar};
  padding: 0px 10px;
  @media (max-width: 1000px){
    margin-left:100px;
  }

`
