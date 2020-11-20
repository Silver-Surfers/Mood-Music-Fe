import { names } from '../Data/data';
import React from 'react';
import github from '../Data/Images/github.png';
import linkedIn from '../Data/Images/linkedIn.jpg';
import styles from './AboutPage.css';
import { useHistory } from 'react-router-dom';


export const AboutPage = () => {

  const history = useHistory();

  const nameStuff = names.map(name => (
    <>
      <li className={styles.devBox} key={name.name}>
        <img className={styles.devImg} src={name.image} alt={name.name} />
        <h2>{name.name}</h2>
        <p>{name.description}</p>
        <div className="links">
          <a href={name.github}>
            <img
              className={styles.imgLink}
              src={github}
              alt={`${name.name} github`}>
            </img>
          </a>
          <a href={name.linkedin}>
            <img
              className={styles.imgLink}
              src={linkedIn} 
              alt={`${name.name} linkedIn`}>
            </img> 
          </a>
        </div>
      </li>
    </>
  ));

  return (
    <>
      <div className={styles.mainContainer}>
        <ul>
          {nameStuff}
        </ul>
        <div className={styles.butDiv}>
          <button className={styles.button} onClick={() => {
            history.push('/');
          }}>home</button>
        </div>
      </div>
    </>
  );
};
