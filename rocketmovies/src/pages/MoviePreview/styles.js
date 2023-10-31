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

  > main > .container1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
  }

  #back {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }

  #back > a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  #title {
    display: flex;
    gap: 19px;
  }

  #title > h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #stars {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  #stars > svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  #infos {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  #infos img {
    width: 16px;
    height: 16px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 35px;
  }

  #infos > h2 {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  #infos > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .text > h1 {
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;