import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="" alt="pic" 
            width={400} height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TEST</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>
      <Link href="/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="" alt="[ic" 
            width={400} height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TEST</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog
