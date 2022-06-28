import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Image,
  Name,
  Tag,
  Location,
  UserStatsList,
  UserStats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <UserStatsList>
        <UserStats>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </UserStats>
        <UserStats>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </UserStats>
        <UserStats>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </UserStats>
      </UserStatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

// ==================================================
