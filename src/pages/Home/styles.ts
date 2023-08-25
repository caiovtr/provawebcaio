import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  height:100%;
grid-template-columns: repeat(2, auto);
  margin: 0 auto;
  width:100%;
  gap:1rem;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    font-size: 0.9rem;
  }
`


