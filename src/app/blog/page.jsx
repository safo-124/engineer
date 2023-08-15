import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import WorkerHall from '/public/workers/worker1.jpg'
import workerWires from '/public/workers/workerWires.jpg'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={WorkerHall} alt="pic" 
            width={400} height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Topic</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={workerWires} alt="pic" 
            width={400} height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Topic</h1>
          <p className={styles.desc}>Decription</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog
