import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  display: flex;
  align-items: flex-start;
  align-self: stretch;

  padding: 19px 24px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;