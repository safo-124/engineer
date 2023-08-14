import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>@2023 RUWISE. All rights reserved. Developed By SALLE</div>
      <div className={styles.social}>
        <Link href="/">
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="safo_fb"/>
        </Link>
        <Link href="/">
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="safo"/>
        </Link>
        <Link href="/">
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="safo"/>
        </Link>
        <Link href="/">
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="safo"/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
