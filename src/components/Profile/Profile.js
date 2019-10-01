import React from "react";
import ProfileList from "../ProfileList/ProfileList";

const Profile = ({ everithing }) => {
  return everithing.map(
    elem => elem.isShow && <ProfileList key={elem.id} {...elem} />
  );
};

export default Profile;
