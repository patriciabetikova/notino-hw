import styled from "styled-components"
import { theme } from "theme"

export const Row = styled.div`
  display: flex;
  > :first-child {
    width: 100px;
    flex-shrink: 0;
  }
`
export const Card = styled.div`
  ${theme.glassmorphism}
  padding: 8px 16px;
`

export const ButtonsWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 12px;
  margin-top: 24px;
`
