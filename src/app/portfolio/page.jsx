import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import WorkerHall from '/public/workers/WorkerHall.jpg'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Take A Look At Our Previous Projects</h1>
      <Image src={WorkerHall} alt="pic" 
        className={styles.image}
      />
    </div>
  )
}

export default Portfolio
