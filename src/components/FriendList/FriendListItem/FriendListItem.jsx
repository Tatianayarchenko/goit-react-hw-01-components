import PropTypes from 'prop-types';
import {
  FriendsItemStyles,
  FriendStatus,
  FriendsImgStyles,
  FriendsNameStyles,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItemStyles>
      <FriendStatus isOnline={isOnline} />
      <FriendsImgStyles src={avatar} alt="User avatar" width="48" />
      <FriendsNameStyles>{name}</FriendsNameStyles>
    </FriendsItemStyles>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};
