import React from "react";

const ProfileList = ({ title, logo }) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={logo} />
    </>
  );
};

export default ProfileList;
