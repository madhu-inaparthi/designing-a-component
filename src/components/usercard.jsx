// write the component code here
import React from 'react';
import './Usercard.css';

const Usercard = () => {
  const profilePhoto = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2jkzA9ogW7AFzgISqiiBb6kE9wyWeNGScrIhkAbnjfsUUAfQaX2J7yJI-XXfYqT683nVYiLAB8FK4gLpMXKJhQCM3BftrVcHEOQBaDChvTPVK-hx6iDA-kJjx1ASGerPdRSwj-8q3phKUzvK4m8yNhBHoEfbF7TJuI4ISNeAwmtV1jg1K86q8y9BIXLmU/w1200-h675-p-k-no-nu/car-pc-desktop-4k.webp'; 
  const name = 'Madhu Kiran';
  const email = 'inaparthi.madhukiran.s89@kalvium.community';
  const phoneNumber = '0000000000';
  const address = '1234 Galaxy St, Milky Way, Earth';

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">Email: {email}</p>
      <p className="user-phone">Phone: {phoneNumber}</p>
      <p className="user-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;