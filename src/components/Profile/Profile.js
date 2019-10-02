import React from 'react';
import PropTypes from 'prop-types';
import ProfileList from '../ProfileList/ProfileList';
import Container from './Profile.style';

const Profile = ({ everithing, defaultImage }) => {
  return (
    <Container>
      {everithing.map(elem => {
        return (
          elem.isShow && (
            <ProfileList defaultImage={defaultImage} key={elem.id} {...elem} />
          )
        );
      })}
    </Container>
  );
};

Profile.propTypes = {
  defaultImage: PropTypes.string.isRequired,
  everithing: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Profile;
