import React from "react";
import profileImg from '../images/profileImg.png';
import '../styles/componentStyles/ProfileImage.css';

function ProfileImage() {
  return (
    <div className="pic-container">

      <img className="profileImg" src={profileImg} alt="selfie of Tisha Anderson in blue sweater" />

    </div>
    
  )
}

export default ProfileImage;