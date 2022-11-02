import styled from "styled-components/macro";
import { theme } from "theme";

export const SButton = styled.button`
  ${theme.glassmorphism}
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;

  :hover {
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease-in-out;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
