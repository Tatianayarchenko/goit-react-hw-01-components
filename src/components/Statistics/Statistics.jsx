import PropTypes from 'prop-types';
import {
  Item,
  Section,
  Title,
  StatisticsName,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatisticsName>
        {stats.map(({ id, label, percentage }) => {
          const getRandomHexColor = function () {
            return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
          };
          return (
            <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatisticsName>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
