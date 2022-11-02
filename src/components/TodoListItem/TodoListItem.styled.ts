import styled, { css } from "styled-components";
import { theme } from "theme";

export const STodo = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 12px;
  align-items: center;

  p {
    flex-grow: 1;
    ${theme.glassmorphism}
    padding: 8px;
    line-height: 24px;
    cursor: pointer;

    :hover {
      background: rgba(255, 255, 255, 0.5);
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const Checkmark = styled.div<{ checked: boolean }>`
  ${theme.glassmorphism}
  padding: 8px;
  width: 26px;
  height: 26px;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease-in-out;
  }

  ${(p) =>
    p.checked &&
    css`
      :after {
        content: "✔";
        font-size: 12px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
      }
    `}
`;
