import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

interface StyledButtonProps extends Pick<ButtonProps, 'size'> {}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => {
    switch (size) {
      case 'small':
        css`
          width: 40px;
        `;
        break;
      case 'medium':
        css`
          width: 80px;
        `;
        break;
      case 'large':
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
