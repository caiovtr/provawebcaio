import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: auto;
    font-size: 0.9rem;
  }
`
