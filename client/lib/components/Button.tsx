import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: ReactNode;
  size?: "large" | "medium" | "small";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, size, className, onClick }: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      className={className}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

interface StyledButtonProps extends Pick<ButtonProps, "size"> {}
const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => {
    switch (size) {
      case "small":
        css`
          width: 40px;
        `;
        break;
      case "medium":
        css`
          width: 80px;
        `;
        break;
      case "large":
        css`
          width: 120px;
        `;
        break;
      default:
        return css`
          width: 100%;
        `;
    }
  }};
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default React.memo(Button);
