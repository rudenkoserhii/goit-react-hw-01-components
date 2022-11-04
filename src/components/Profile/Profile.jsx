import PropTypes from 'prop-types';
import { ProfileImage, ProfileTitle, ProfileInfo, StatList, ListItem, StatName, StatQty, UserInfoWrapper, ProfileWrapper } from './Profile.styled';
import { theme } from '../theme';

export const Profile = ({ avatar, username, tag, location, stats:{followers, views, likes}}) => {
  return (
    <ProfileWrapper className="profile">
        <UserInfoWrapper className="description">
            <ProfileImage
            src={avatar}
            alt="User avatar"
            className="avatar"
            />
            <ProfileTitle className="name">{username}</ProfileTitle>
            <ProfileInfo className="tag">{tag}</ProfileInfo>
            <ProfileInfo className="location" style={{marginBottom:0}}>{location}</ProfileInfo>
        </UserInfoWrapper>
        <StatList className="stats">
            <ListItem>
            <StatName className="label">Followers</StatName>
            <StatQty className="quantity">{followers}</StatQty>
            </ListItem>
            <ListItem style={{borderRight: theme.borders.normal, borderLeft: theme.borders.normal}}>
            <StatName className="label">Views</StatName>
            <StatQty className="quantity">{views}</StatQty>
            </ListItem>
            <ListItem>
            <StatName className="label">Likes</StatName>
            <StatQty className="quantity">{likes}</StatQty>
            </ListItem>
        </StatList>
    </ProfileWrapper>)
}

Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.object.isRequired,
};