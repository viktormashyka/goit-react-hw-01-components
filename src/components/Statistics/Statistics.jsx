import PropTypes from 'prop-types';
import {
  StatBox,
  StatItem,
  StatList,
  Title,
  Wrapper,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      <StatBox className="statistics">
        {title.length && <Title className="title"> {title} </Title>}
        <StatList className="stat-list">
          {stats.map(stat => (
            <StatItem className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <br />
              <span className="percentage">{stat.percentage}%</span>
            </StatItem>
          ))}
        </StatList>
      </StatBox>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
