/* eslint-disable max-len */
import React from 'react';
import styles from './AuthPage.css';
import spotify from  '../images/spotify.png';

export const AuthPage = () => {

  return (
    <div className={styles.mainPage}>
      <div className={styles.flex}>
        <div className={styles.record}>
        </div>
        <div className={styles.content}>
          <h1 className={styles.mood}>MOOD MUSIC</h1>
          <div className={styles.button}>
            <button onClick={() => {
              window.location = `${process.env.REACT_APP_SERVER_URL}/api/v1/login`;
            }
            }>Log In<img src={spotify} alt="Spotify Logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
