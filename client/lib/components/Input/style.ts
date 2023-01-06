import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 15px;

  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  color: #333333;

  &::placeholder {
    color: #cccccc;
    font-size: 13px;
    font-weight: 500;
  }
  &:hover::placeholder {
    color: #333333;
  }
  &:hover {
    border: 1px solid #41a1ea;
  }
  &:focus {
    outline: none;
    border: 1px solid #41a1ea;
  }
`;
