import React from 'react'
// import SingleContent from '../../components/SingleContent/SingleContent';
import mg from "./Profile.jpg"
import "./Profile.css";
const Profile = () => {
  return (
    <div className='profileContainer'>
      <div className="imgBox">
        <img src={mg} alt="profile"  />
      </div>
      <div className="mobImgBox">
        <img src={mg} alt="mg" />
      </div>
      <div className="aboutBox">
        <div className="nameBox">
          <label htmlFor="name">Name : </label>
          <span id='name'>Kuldeep Singh</span>
        </div>
        <div className="nameBox">
          <label htmlFor="name">Mobile No : </label>
          <span id='name'>00023265998</span>
        </div>
        <div className="nameBox">
          <label htmlFor="name">YouTube Channel : </label>
          <span id='name'>Kuldeep Singh</span>
        </div>
        <div className="nameBox">
          <label htmlFor="name">Instagram : </label>
          <span id='name'>Web.js</span>
        </div>
        <div className="nameBox">
          <label htmlFor="name">LinkedIn : </label>
          <span id='name'>kuldeep-singh-12015a217</span>
        </div>
        <div className="nameBox">
          <label htmlFor="name">Github : </label>
          <span id='name'>kuldeepSinghji</span>
        </div>
      </div>
    </div>
  )
}

export default Profile;