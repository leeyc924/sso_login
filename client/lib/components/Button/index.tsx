import React, { ReactNode } from 'react';
import { StyledButton } from './style';

export interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  size?: 'large' | 'medium' | 'small';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type = 'button', children, size, className, onClick, ...rest }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={e => onClick?.(e)} className={className} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default React.memo(Button);
