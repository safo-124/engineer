import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
import Location from 'public/location-icon.svg';
import Mail from 'public/mail-icon.svg';
import Phone from 'public/phone-icon.svg';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Get in Touch</h1>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <Image src={Phone} alt="Phone" className={styles.icon} />
          <p className={styles.infoText}>123-456-7890</p>
        </div>
        <div className={styles.infoItem}>
          <Image src={Location} alt="Address" className={styles.icon} />
          <p className={styles.infoText}>123 Main Street, City</p>
        </div>
        <div className={styles.infoItem}>
          <Image src={Mail} alt="Email" className={styles.icon} />
          <p className={styles.infoText}>info@example.com</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="image icon"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="text" placeholder="email" className={styles.input}/>
          <textarea className={styles.textArea} cols="30" placeholder="message" rows="10"></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
