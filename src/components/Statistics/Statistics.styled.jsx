import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: var(--maw);
  background-color: var(--color-white);
  border: var(--bd);
  box-shadow: var(--bxsh);
  margin: var(--sect-margin);
`;
export const Title = styled.h2`
  text-transform: uppercase;
  color: grey;
  font-weight: 500;
`;
export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
export const StatisticsListItem = styled.li`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  padding: 10px;
  background-color: ${({ type }) => {
    switch (type) {
      case '.docx':
        return 'seagreen';
      case '.pdf':
        return 'blueviolet';
      case '.mp3':
        return 'tomato';
      case '.psd':
        return 'dodgerblue';
      default:
        return '#000';
    }
  }};
`;
export const Label = styled.span``;
export const Percentage = styled.span`
  font-size: 24px;
`;
