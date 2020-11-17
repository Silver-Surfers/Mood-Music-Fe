import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../actions/spotifyActions';
import { setLoading } from '../actions/azureActions';

export const AuthPage = ({ location }) => {
  console.log(location);
  const { search } = location;
  const token = search.slice(6, search.length);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(token));
    dispatch(setLoading(false));
  }, []);
  

  return (
    <>
      <h1>WELCOME TO MOOD MUSIC</h1>
      <button onClick={() => {
        window.location = window.location.href.includes('localhost') 
          ? 'http://localhost:7891/' 
          : 'https://better-playlists-backend.herokuapp.com/login'; 
      }
      }>Login To Spotify</button>
    </>
  );

};
AuthPage.propTypes = {
  location: PropTypes.string.isRequired
}; 
