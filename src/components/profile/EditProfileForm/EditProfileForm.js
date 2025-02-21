import React, { useState, useEffect } from 'react';
import './EditProfileForm.css';

function EditProfileForm({ profileData }) {
  const [editedProfileData, setEditedProfileData] = useState({
    editedFirstName: profileData.firstName || '',
    editedLastName: profileData.lastName || '',
    editedUserName: profileData.userName || '',
    editedGender: profileData.gender || '',
    editedEmail: profileData.email || '',
    editedAddress: profileData.address || '',
    editedPhoneNumber: profileData.phoneNumber || '',
    editedPassword: profileData.password || '',
  });

  useEffect(() => {
    // Load data from local storage if available
    const storedData = localStorage.getItem('editedProfileData');
    if (storedData) {
      setEditedProfileData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the edited profile data to local storage
    localStorage.setItem(
      'editedProfileData',
      JSON.stringify(editedProfileData)
    );
    console.log('User data successfully updated:', editedProfileData);
  };

  return (
    <div className="edit-profile-form-container">
      <h2>Edit User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="editedFirstName">First Name</label>
          <input
            type="text"
            id="editedFirstName"
            name="editedFirstName"
            value={editedProfileData.editedFirstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="editedLastName">Last Name</label>
          <input
            type="text"
            id="editedLastName"
            name="editedLastName"
            value={editedProfileData.editedLastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="editedUserName">User Name</label>
          <input
            type="text"
            id="editedUserName"
            name="editedUserName"
            value={editedProfileData.editedUserName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="editedGender">Gender</label>
          <input
            type="text"
            id="editedGender"
            name="editedGender"
            value={editedProfileData.editedGender}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="editedEmail">Email</label>
          <input
            type="email"
            id="editedEmail"
            name="editedEmail"
            value={editedProfileData.editedEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="editedAddress">Address</label>
          <input
            type="text"
            id="editedAddress"
            name="editedAddress"
            value={editedProfileData.editedAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="editedPhoneNumber">Phone Number</label>
          <input
            type="text"
            id="editedPhoneNumber"
            name="editedPhoneNumber"
            value={editedProfileData.editedPhoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="editedPassword">Password</label>
          <input
            type="password"
            id="editedPassword"
            name="editedPassword"
            value={editedProfileData.editedPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfileForm;
