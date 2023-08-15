import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a service</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>illustrations</span>
        </Link>
        <Link href="/portfolio/Motor" className={styles.item}>
          <span className={styles.title}>Motor Works</span>
        </Link>
        <Link href="/portfolio/Generator" className={styles.item}>
          <span className={styles.title}>Generator</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
