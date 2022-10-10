import PropTypes from 'prop-types';
import {
  StatBox,
  StatItem,
  StatList,
  Title,
  Wrapper,
} from './Statistics.styled';

export const Statistics = ({ statistics }) => {
  return (
    <Wrapper>
      <StatBox class="statistics">
        <Title class="title">Upload stats</Title>

        <StatList class="stat-list">
          {statistics.map(stat => (
            <StatItem class="item" key={stat.id}>
              <span class="label">{stat.label}</span>
              <br />
              <span class="percentage">{stat.percentage}%</span>
            </StatItem>
          ))}
        </StatList>
      </StatBox>
    </Wrapper>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
