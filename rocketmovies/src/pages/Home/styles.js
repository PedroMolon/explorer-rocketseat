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
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .movies {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }
`;