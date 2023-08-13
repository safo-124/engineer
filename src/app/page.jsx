import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/gen.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Get Electricity Flowing </h1>
        <p className={styles.desc}>
         We are dedicated to ensuring the 
         highest level of costumer satifistation. With quality Electrical and Electronics Installation
         .
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt=""  className={styles.img}/>
      </div>
    </div>
  )
}
