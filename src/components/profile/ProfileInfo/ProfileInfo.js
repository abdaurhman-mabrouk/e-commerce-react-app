import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../../../data/profileData';
import './ProfileInfo.css';

function ProfileInfo() {
  return (
    <div className="profile-info-container">
      <table className="profile-info-table">
        <thead>
          <tr className="profile-info-header">
            <th className="profile-info-header-cell">First Name</th>
            <th className="profile-info-header-cell">Last Name</th>
            <th className="profile-info-header-cell">User Name</th>
            <th className="profile-info-header-cell">Email</th>
            <th className="profile-info-header-cell">Password</th>
            <th className="profile-info-header-cell">Gender</th>
            <th className="profile-info-header-cell">Birth Date</th>
            <th className="profile-info-header-cell">Phone Number</th>
            <th className="profile-info-header-cell">Address</th>
          </tr>
        </thead>

        <tbody>
          {profileData.map((data, index) => {
            const {
              firstName,
              lastName,
              userName,
              email,
              password,
              gender,
              birthDate,
              phoneNumber,
              address,
            } = data;

            return (
              <tr key={index} className="profile-info-row">
                <td className="profile-info-cell">{firstName}</td>
                <td className="profile-info-cell">{lastName}</td>
                <td className="profile-info-cell">{userName}</td>
                <td className="profile-info-cell">{email}</td>
                <td className="profile-info-cell">{password}</td>
                <td className="profile-info-cell">{gender}</td>
                <td className="profile-info-cell">{birthDate}</td>
                <td className="profile-info-cell">{phoneNumber}</td>
                <td className="profile-info-cell">{address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Link to="/edit_profile">Edit Profile</Link>
      </div>
    </div>
  );
}

export default ProfileInfo;
