/* eslint-disable max-len */
import { names } from '../Data/data';
import React from 'react';
import github from '../Data/Images/github.png';
import linkedIn from '../Data/Images/linkedIn.jpg';

export const AboutPage = () => {
  const nameStuff = names.map(name => (
    <li key={name.name}>
      <img src={name.image} alt={name.name} />
      <h2>{name.name}</h2>
      <p>{name.description}</p>
      <div className="links">
        <a href={name.github}>
          <img src={github} alt={`${name.name} github`}></img>
        </a>
        <a href={name.linkedin}>
          <img src={linkedIn} alt={`${name.name} linkedIn`}></img>
        </a>
      </div>
    </li>
  ));

  return (
    <>
      <h1>About Us</h1>
      <ul className="list">
        {nameStuff}
      </ul>
    </>
  );
};
