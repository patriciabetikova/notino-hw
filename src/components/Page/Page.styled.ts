import styled from "styled-components/macro"
import { theme } from "theme"

export const SPage = styled.div`
  background-image: ${theme.gradients.bg};
  width: 100%;
  height: 100vh;
  padding: 24px;
  overflow: auto;
`

export const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`
