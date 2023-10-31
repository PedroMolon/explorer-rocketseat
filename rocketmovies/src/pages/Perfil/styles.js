import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;
    gap: 8px;

    padding-left: 100px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  a, svg {
    text-decoration: none; 
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
  }

  > main {
    width: 340px;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    margin: -90px auto;
  }

  user {

  }

  img {
    width: 186px;
    height: 186px;
  }

  #elipse {
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 17%;
    left: 51%;
  }

  #elipse:hover {
    transition: all .3s ease-in-out;
    transform: scale(1.1);
  }

  #elipse svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .container1, .container2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .button {
    width: auto;
  }
`;