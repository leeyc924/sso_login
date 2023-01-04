import { Button, Input, InputRef } from '@components';
import { FormEventHandler, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Wrap, Form } from './style';

const LoginForm = () => {
  const idInputRef = useRef<InputRef>(null);
  const pwInputRef = useRef<InputRef>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault();
    const id = idInputRef.current?.value;
    const pw = pwInputRef.current?.value;

    if (!id) {
      alert('아이디를 입력하세요!');
    }

    if (!pw) {
      alert('패스워드를 입력하세요!');
    }
  }, []);

  return (
    <Wrap>
      <Form onSubmit={e => handleSubmit(e)}>
        <Input ref={idInputRef} placeholder='Enter Id' />
        <Input ref={pwInputRef} placeholder='Enter Password' />
        <StyledButton type="submit">로그인</StyledButton>
      </Form>
    </Wrap>
  );
};

const StyledButton = styled(Button)`
  border-radius: 0;
  height: 52px;
`;

export default LoginForm;
