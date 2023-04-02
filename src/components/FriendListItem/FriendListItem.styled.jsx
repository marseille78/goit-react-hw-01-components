import styled from '@emotion/styled';

export const Container = styled.li`
  display: flex;
  align-items: center;
  border: var(--bd);
  box-shadow: var(--bxsh);
  padding: 8px 8px 8px 20px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  img {
    width: 40px;
    margin-right: 16px;
  }
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 16px;
  background-color: ${({ isOnline }) => {
    return isOnline
      ? 'seagreen'
      : 'tomato';
  }};
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
