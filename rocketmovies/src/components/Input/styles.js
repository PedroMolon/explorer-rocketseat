import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 19px 24px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

  > input {
    width: 100%;
    height: 56px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    outline: none;
  }
`;