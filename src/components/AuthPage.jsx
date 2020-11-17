import React from 'react';

export const AuthPage = () => {
  

  return (
    <>
      <h1>WELCOME TO MOOD MUSIC</h1>
      <button onClick={() => {
        window.location = window.location.href.includes('localhost') 
          ? 'http://localhost:7890/login' 
          : 'https://better-playlists-backend.herokuapp.com/login'; 
      }
      }>Login To Spotify</button>
    </>
  );
};
