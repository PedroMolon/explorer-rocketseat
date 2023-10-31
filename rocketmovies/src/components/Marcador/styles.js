import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;