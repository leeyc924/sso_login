import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

interface StyledButtonProps extends Pick<ButtonProps, 'size'> {}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => {
    switch (size) {
      case 'small':
        css`
          width: 40px;
          height: 28px;
          font-size: 13px;
        `;
        break;
      case 'medium':
        css`
          width: 80px;
          height: 38px;
          font-size: 14px;
        `;
        break;
      case 'large':
        css`
          width: 120px;
          height: 48px;
          font-size: 16px;
        `;
        break;
      default:
        return css`
          width: 100%;
          height: 38px;
          font-size: 14px;
        `;
    }
  }};
  border: 1px solid #dddddd;
  background-color: #41a1ea;
  border-radius: 6px;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  cursor: pointer;
  border-radius: 18px;
  color: white;
  font-weight: bold;
`;
