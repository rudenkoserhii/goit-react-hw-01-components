import PropTypes from 'prop-types';
import { StatWrapper, StatTitle, StatList } from './Statistics.styled';
import { StatItem } from './StatItem';

export const Statistics = ( {title, stats}) => {
  return (
    <StatWrapper className="statistics">
        {(title)&&(<StatTitle className="title">{title}</StatTitle>)}

        <StatList className="stat-list">
            {stats.map((statItem) => (
                <StatItem key={statItem.id} statItem={statItem}/>
            ))}
        </StatList>
    </StatWrapper>
  )};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
};

