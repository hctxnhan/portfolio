import styled, { css } from 'styled-components';

const inputStyle = css`
  font-family: var(--font-styled-text);
  width: 100%;
  font-size: 2.2rem;
  border: none;
  padding: 1rem 2rem;

  &:focus {
    outline: none;
  }
`;

export const StyledFormInput = styled.input`
  ${inputStyle}
`;

export const EmailFormInput = styled(StyledFormInput)``;

export const MessageFormInput = styled.textarea`
  height: 30rem;
  ${inputStyle}
`;
