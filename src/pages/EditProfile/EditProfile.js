import React from 'react';
import EditProfileForm from '../../components/profile/EditProfileForm/EditProfileForm';
import { profileData } from '../../data/profileData';

function EditProfile() {
  const userProfile = profileData[0]; // Assuming you want to edit the first profile

  return (
    <div>
      <h1>Edit Profile</h1>
      <EditProfileForm profileData={userProfile} />
    </div>
  );
}

export default EditProfile;
