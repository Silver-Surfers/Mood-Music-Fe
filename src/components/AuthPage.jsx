/* eslint-disable max-len */
import React from 'react';
import styles from './AuthPage.css';
import spotify from  '../images/spotify.png';
// import PropTypes from 'prop-types';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setToken } from '../actions/spotifyActions';
// import { setLoading } from '../actions/azureActions';

export const AuthPage = () => {
  // console.log(location);
  // const { search } = location;
  // const token = search.slice(6, search.length);
  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setToken(token));
  //   dispatch(setLoading(false));
  // }, []);
  

  return (
    <>
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
    </>
  );
};
// AuthPage.propTypes = {
//   location: PropTypes.string.isRequired
// }; 
