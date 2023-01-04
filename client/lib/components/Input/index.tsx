import React, { forwardRef, ReactNode, useCallback, useImperativeHandle, useState } from 'react';
import { StyledInput } from './style';

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  placeholder?: string;
}

export interface InputRef {
  value: string | number | readonly string[];
}

const Input = forwardRef<InputRef, InputProps>(
  ({ type = 'text', value = '', className, placeholder, onChange, ...rest }: InputProps, ref) => {
    const [_value, setValue] = useState(value);

    const handleChangeValue: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
      setValue(e.target.value);
      onChange?.(e);
    }, []);

    useImperativeHandle(ref, () => ({
      value: _value,
    }));

    return (
      <StyledInput type={type} placeholder={placeholder} onChange={e => handleChangeValue(e)} value={_value} className={className} {...rest} />
    );
  },
);

export default React.memo(Input);
