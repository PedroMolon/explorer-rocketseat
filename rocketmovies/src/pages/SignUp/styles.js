import styled from 'styled-components';
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: stretch;

  > main {
    display: flex;
    flex-direction: row;
    
  }

  > .form {
    width: 40%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    padding: 235px 134px;
  }

  .title h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .title p{
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100}; 
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .login {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .back {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }

  a {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  width: 60%;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: opacity(60%);
`;