import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 32px;
  border-radius: 16px;

  > .rating {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > .rating > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .stars > svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;