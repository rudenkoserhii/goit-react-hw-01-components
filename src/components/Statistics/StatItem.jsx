import {ListItem, StatName, StatQty } from './Statistics.styled';
import PropTypes from 'prop-types';

export const StatItem = ({statItem: {id, label, percentage}}) => {
  return (
        <ListItem className="item" id={id}>
            <StatName className="label">{label}</StatName>
            <StatQty className="percentage">{percentage}%</StatQty>
            </ListItem>
  )};

StatItem.propTypes = {
    statItem: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
})};