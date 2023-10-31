import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;

  padding: 8px 16px;
  background: ${({ theme }) => theme.COLORS.TAGS_BACKGROUND};
  border-radius: 8px;

  font-size:  12px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;