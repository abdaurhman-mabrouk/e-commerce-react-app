import React from 'react';
import OrdersHistory from '../../components/profile/OrdersHistory/OrdersHistory';
import ProfileInfo from '../../components/profile/ProfileInfo/ProfileInfo';
import './Profile.css';

function Profile() {
  return (
    <div>
      <OrdersHistory />
      <ProfileInfo />
    </div>
  );
}

export default Profile;
