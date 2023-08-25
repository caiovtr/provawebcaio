import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
`
export const colors = {
  primary: "#472F5F",
  secondary: "#F9EBC4",
  third: "#FC2F68",
  thirdLight: "#FFB391",
  black: "#000",
  white: "#fff"
}
export const vars = {
  size_side_bar:"10%"
}