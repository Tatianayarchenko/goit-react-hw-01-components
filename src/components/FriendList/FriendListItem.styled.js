import styled from 'styled-components';

export const FriendsItemStyles = styled.li`
  display: flex;
  align-items: center;
  background-color: aliceblue;
  border-radius: 5px;
  box-shadow: 2px 3px 5px black;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 15px;
  background-color: #000000;
  background-color: ${props => {
    console.log(props.children);
    if (props.children) {
      return 'red';
    }
    return 'green';
  }};
`;

export const FriendsImgStyles = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 15px;
`;

export const FriendsNameStyles = styled.p`
  /* display: flex;
  align-items: center; */
`;
