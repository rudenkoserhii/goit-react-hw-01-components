import { ListItem, FriendStatusOn, FriendStatusOff, FriendAvatar, FriendName } from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendsListItem = ({friend: {id, isOnline, avatar, name}}) => {
  return (
        <ListItem className="item" id={id}>
            { isOnline
                ? <FriendStatusOn className="status"></FriendStatusOn>
                : <FriendStatusOff className="status"></FriendStatusOff> }
            <FriendAvatar className="avatar" src={avatar} alt="User avatar"/>
            <FriendName className={name}>{name}</FriendName>
        </ListItem>
  )};

FriendsListItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
})};