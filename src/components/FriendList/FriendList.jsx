import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsListStyles } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <FriendsListStyles>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        );
      })}
    </FriendsListStyles>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
