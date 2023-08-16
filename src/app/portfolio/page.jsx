import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import WorkerHall from '/public/workers/workerHall.jpg';
import workerWires from '/public/workers/workerWires.jpg'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Take A Look At Our Previous Projects</h1>
      <div className={styles.projectCard}>
        <div className={styles.imageContainer}>
          <Image src={WorkerHall} alt="pic" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.projectTitle}>Light Hall Project</h2>
          <p className={styles.projectSummary}>
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
          </p>
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.imageContainer}>
          <Image src={workerWires} alt="pic" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.projectTitle}>Wiring Project</h2>
          <p className={styles.projectSummary}>
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
          </p>
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={styles.imageContainer}>
          <Image src={WorkerHall} alt="pic" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.projectTitle}>Worker Hall Project</h2>
          <p className={styles.projectSummary}>
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
            This project involved creating a modern and efficient workspace for our team.
            The Worker Hall is designed to inspire creativity and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
