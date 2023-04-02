import PropTypes from 'prop-types';
import { Container, Label, Percentage, StatisticsList, StatisticsListItem, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {

  const statisticsList = stats.map(({ id, label, percentage }) => (
    <StatisticsListItem key={id} type={label}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticsListItem>
  ));

  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        { statisticsList }
      </StatisticsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
};
