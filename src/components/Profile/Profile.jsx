import PropTypes from 'prop-types';
import user from './user.json';
import { ProfileImage, ProfileTitle, ProfileInfo, StatList, ListItem, StatName, StatQty, UserInfoWrapper, ProfileWrapper } from './Profile.styled';
import { theme } from '../theme';

export const Profile = () => {
  return (
    <ProfileWrapper className="profile">
        <UserInfoWrapper className="description">
            <ProfileImage
            src={user.avatar}
            alt="User avatar"
            className="avatar"
            />
            <ProfileTitle className="name">{user.username}</ProfileTitle>
            <ProfileInfo className="tag">{user.tag}</ProfileInfo>
            <ProfileInfo className="location" style={{marginBottom:0}}>{user.location}</ProfileInfo>
        </UserInfoWrapper>
        <StatList className="stats">
            <ListItem>
            <StatName className="label">Followers</StatName>
            <StatQty className="quantity">{user.stats.followers}</StatQty>
            </ListItem>
            <ListItem style={{borderRight: theme.borders.normal, borderLeft: theme.borders.normal}}>
            <StatName className="label">Views</StatName>
            <StatQty className="quantity">{user.stats.views}</StatQty>
            </ListItem>
            <ListItem>
            <StatName className="label">Likes</StatName>
            <StatQty className="quantity">{user.stats.likes}</StatQty>
            </ListItem>
        </StatList>
    </ProfileWrapper>)
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.object.isRequired,
})};