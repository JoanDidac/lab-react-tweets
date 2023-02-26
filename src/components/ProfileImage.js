import React from 'react';

const ProfileImage = (props) => {
  const {image} = props; 
  return (
    <div>
      <img src={image} className="profile" alt="ProfileImage"></img>
    </div>
  )
}

export default ProfileImage;