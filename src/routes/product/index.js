import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ id }) => {
  return (
    <div class={style.profile}>
      <h1>product: {id}</h1>
    </div>
  );
};

export default Profile;
