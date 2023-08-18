import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Security from '/public/services/security.jpg'
import Solar from '/public/services/solarpanel.jpg'



const Blog = () => {
  return (
    <div className={styles.mainContainer}>
       
      
      
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={Security} alt="pic" 
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
          <Image src={Solar} alt="pic" 
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
