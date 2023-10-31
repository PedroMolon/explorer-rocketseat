import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: auto;
  
  padding: 16px 230px;
  background: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 10px;
  border: none;

  font-size: 16PX;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: center;

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;