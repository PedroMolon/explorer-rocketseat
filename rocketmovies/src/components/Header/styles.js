import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 24px 123px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  
  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  width: auto%;

  display: flex;
  align-items: center;
  gap: 9px;

  > div {
    width: 125px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  > div > h1 {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div > a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 35px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;