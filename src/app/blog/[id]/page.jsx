import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </h1>
          <p>
            Pariatur reprehenderit sunt veniam laborum reprehenderit nulla proident incididunt voluptate. Aliqua culpa duis non nostrud non et. Lorem ea dolore voluptate adipisicing tempor.
            Adipisicing dolore 
          </p>
          <div className={styles.author}>
            <Image src=""
            alt="pic"
            width={40}
            height={40}
            className={styles.avator}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
          src=""
          alt="pic"
          fill={true}
          className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
            <p className={styles.text}>
              Dolor in tempor eiusmod dolor est magna commodo mollit ut voluptate quis eiusmod duis. Culpa cupidatat deserunt non cupidatat nostrud enim duis mollit incididunt est. In enim laboris excepteur qui.
              Enim proident eiusmod ipsum labore sit sit occaecat qui labore proident in fugiat consequat. Aliqua veniam elit dolore mollit duis ad ullamco magna excepteur dolore velit. Commodo occaecat amet nostrud duis reprehenderit. Laborum laboris reprehenderit nisi ea fugiat. Voluptate enim id aliqua veniam labore deserunt ea duis labore laborum sint culpa ipsum quis. Id enim anim minim consectetur aute dolore minim veniam ut.
              Ullamco incididunt ipsum deserunt non magna excepteur amet ipsum Lorem aute. Cillum magna exercitation anim nulla reprehenderit. Est nulla ipsum consequat elit magna adipisicing cillum eu dolor aliquip ipsum reprehenderit cupidatat mollit. Cillum pariatur nostrud ea ipsum labore. Enim fugiat elit sint magna exercitation in consequat labore mollit eu deserunt. Dolor reprehenderit ea ullamco consectetur. Fugiat excepteur occaecat ad ad laborum qui officia officia aliquip non Lorem.
              Cillum enim nisi duis cupidatat excepteur cupidatat culpa. In cupidatat sint aute incididunt labore dolor minim proident id consequat tempor reprehenderit minim fugiat. Consequat consequat culpa consequat ipsum laborum sit exercitation. Quis eiusmod ipsum qui labore minim minim adipisicing veniam do aute. Amet deserunt exercitation quis nulla consectetur sit cillum incididunt nostrud ut dolore Lorem proident.
            </p>
        </div>
    </div>
  )
}

export default BlogPost
