import { FriendsListItems } from './FriendsList.styled';
import { FriendsListItem } from './FriendsListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsListItems className="statistics">
        {friends.map((friend) => (
            <FriendsListItem key={friend.id} friend={friend}/>
            ))}
    </FriendsListItems>
  )};
