import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > main {
    width: 1137px ;
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    gap: 40px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  .container1 {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .container1 > div {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .container1 > div > svg {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .container1 > div > a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .container1 > h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .container2 {
    display: flex;
    gap: 40px;
  }

  .container4 {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .container4 > h1 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  .marcadores {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    gap: 24px;

    padding: 16px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
  }

  .container5 {
    display: flex;
    gap: 40px;
  }

  .dark {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;