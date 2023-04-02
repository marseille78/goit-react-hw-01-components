import PropTypes from 'prop-types';
import { Container, DescItem, Description, Stats, Username } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes }
}) => {
  return (
    <Container>
      <Description>
        <img
          src={avatar}
          alt="User avatar"
        />
        <Username>{username}</Username>
        <DescItem>@{tag}</DescItem>
        <DescItem>{location}</DescItem>
      </Description>

      <Stats>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </Stats>
    </Container>
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
  }).isRequired,
};
