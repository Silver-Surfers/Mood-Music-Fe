import React from 'react';
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
      <h1>WELCOME TO MOOD MUSIC</h1>
      <button onClick={() => {
        window.location = `${process.env.REACT_APP_SERVER_URL}/api/v1/login`;
      }
      }>Login To Spotify</button>
    </>
  );

};
// AuthPage.propTypes = {
//   location: PropTypes.string.isRequired
// }; 
