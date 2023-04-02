import { FriendListItem } from 'components';
import { Container } from './FriendList.styled';

export const FriendList = ({friends}) => {

  const list = friends.map(({
    name,
    isOnline,
    avatar
  }) => (
    <FriendListItem
      key={name}
      name={name}
      isOnline={isOnline}
      avatar={avatar}
    />
  ));

  return (
    <Container>
      { list }
    </Container>
  );
};
