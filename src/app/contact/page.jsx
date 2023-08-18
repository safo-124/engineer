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
          <a href="tel:+233242139453" className={styles.infoText}>+233-242-139-453</a>
        </div>
        <div className={styles.infoItem}>
  <Image src={Location} alt="Address" className={styles.icon} />
  <a
    href="https://www.google.com/maps/search/?q=PS+GLOBAL+GATE+1,+TEMA"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.infoText}
  >
    PS GLOBAL GATE 1, TEMA
  </a>
</div>

        <div className={styles.infoItem}>
          <Image src={Mail} alt="Email" className={styles.icon} />
          <a href="mailto: ruwiseengineering@gmail.com" className={styles.infoText}>ruwiseengineering@gmail.com</a>
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
