/* eslint-disable max-len */
import React from 'react';
import AnnaliseMurphy from '../Images/AnnaliseMurphy.jpeg';
import BrianMcPhillips from '../Images/BrianMcPhillips.jpg';
import JerudMoyer from '../Images/JerudMoyer.jpg';
import NateKruck from '../Images/NateKruck.png';
import github from '../Images/github.png';
import linkedIn from '../Images/linkedIn.jpg';
import styles from './AboutPage.css';
import { useHistory } from 'react-router-dom';

const history = useHistory();

export const AboutPage = () => {

  return (
    <>
      
      <div className={styles.mainContainer}>
        <div className={styles.jerudContainer}>
          <img className={styles.devImg} src={JerudMoyer} alt="Jerud" />
          <h3>Jerud Moyer</h3>
          <p>
            Jerud is a full-stack software developer and dedicated musician. When he&#39;s feeling happy, sad or otherwise you can probably find him listening to Black Sabbath.
          </p>
          <div className={styles.link}>
            <a href="https://github.com/Jerud-Moyer">
              <img className={styles.imgLink} src={github}alt="Jerud-Github"></img>
            </a>
            <a href="https://www.linkedin.com/in/jerud-moyer/">
              <img className={styles.imgLink} src={linkedIn} alt="Jerud-LinkedIn"></img>
            </a>
          </div>
        </div>

        <div className={styles.brianContainer}>
          <img className={styles.devImg} src={BrianMcPhillips} alt="Brian" />
          <h3>Brian McPhillips</h3>
          <p>
          Brian McPhillips Full Stack JavaScript developer I am always listening to different types of electronic music and making full stack apps.
          </p>
          <div className={styles.link}>
            <a href="https://github.com/BrianMcPhillips">
              <img className={styles.imgLink} src={github}alt="Brian-Github"></img>
            </a>
            <a href="https://www.linkedin.com/in/brianmcphillips">
              <img className={styles.imgLink} src={linkedIn} alt="Brian-LinkedIn"></img>
            </a>
          </div>
        </div>

        <div className={styles.natContainer}>
          <img className={styles.devImg} src={NateKruck} alt="Nate" />
          <h3>Nate Kruck</h3>
          <p>
            Full Stack Software Engineer. I like upbeat music no matter what mood I&#39;m in! Hit me with some EDM and you&#39;ll catch me going wild!
          </p>
          <div className={styles.link}>
            <a href="https://github.com/Nate-Kruck">
              <img className={styles.imgLink} src={github}alt="Nate-Github"></img>
            </a>
            <a href="https://www.linkedin.com/in/natekruck/">
              <img className={styles.imgLink} src={linkedIn} alt="Nate-LinkedIn"></img>
            </a>
          </div>
        </div>

        <div className={styles.annaliseContainer}>
          <img className={styles.devImg} src={AnnaliseMurphy} alt="Annalise" />
          <h3>Annalise Murphy</h3>
          <p>
            Annalise is a software engineer, playlist curator and an avid music lover! When she&#39;s not jamming out Black Sabbeth, she&#39;s busy building Full Stack apps.
          </p>
          <div className={styles.link}>
            <a href="https://github.com/Annalise-M">
              <img className={styles.imgLink} src={github}alt="Annalise-Github"></img>
            </a>
            <a href="https://www.linkedin.com/in/annalise-murphy/">
              <img className={styles.imgLink} src={linkedIn} alt="Annalise-LinkedIn"></img>
            </a>
          </div>
        </div>
        <div className={styles.butDiv}>
          <button className={styles.button} onClick={() => {
            history.push('/');
          }}>Home</button>
        </div>
      </div>
    </>
  );
};
