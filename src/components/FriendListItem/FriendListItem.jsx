import PropTypes from 'prop-types';
import { Container, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({
  avatar,
  name,
  isOnline
}) => {
  return (
    <Container>
      <Status isOnline={isOnline}/>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Container>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
