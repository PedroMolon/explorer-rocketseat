import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;
  border: 1px dashed ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 10px;

  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

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