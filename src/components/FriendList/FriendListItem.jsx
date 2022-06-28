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
      {/* {isOnline ? (
        <FriendStatus>{isOnline}</FriendStatus>
      ) : (
        <span>offline</span>
      )} */}
      <FriendStatus>{isOnline}</FriendStatus>
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
