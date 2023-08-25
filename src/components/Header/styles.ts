import styled from "styled-components"
import { colors, vars } from "../../styles/GlobalStyle"


export const Header = styled.header`
 h1{
    color: white;
  }

  background-color:${colors.primary};
  
  margin-bottom:1rem;
  margin-left: calc(${vars.size_side_bar} + 1rem); /* Same as the width of the sidebar */
  padding: 1rem;
  
  display: flex;
  @media (max-width: 1000px){
    margin-left:calc(100px +1rem);
    width: calc(100vw - (100px) );
  }

  
`
