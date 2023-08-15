import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://static.vecteezy.com/system/resources/previews/007/360/793/non_2x/a-technician-is-doing-regular-maintenance-on-the-generator-engine-free-photo.jpg"
         fill={true} alt='' className={styles.img}/>
         <div className={styles.imgText}>
           <h1 className={styles.imgTitle}>Engineers @their best</h1>
           <h2 className={styles.imgDesc}>Handcrafting award winning engineer experience</h2>
         </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who We Are</h1>
        <p className={styles.desc}>
          Id excepteur mollit consequat ut reprehenderit exercitation. Ullamco aliquip do exercitation cillum 
          voluptate nisi id consectetur amet commodo minim.Ex non non nostrud qui ut occaecat magna reprehenderit pariatur eiusmod consectetur.d enim cillum cupidatat fugiat labore elit est est. Ad quis
          id commodo nisi eu aliquip labore duis voluptate est minim minim. Minim culpa velit in et elit quis minim sunt. Esse occaecat minim nulla Lorem consectetur Lorem voluptate officia nostrud aute.
          Consequat proident do culpa laboris minim. Consequat excepteur aliquip occaecat id sint esse ut deserunt sunt ad amet ullamco. 
          Aute consectetur ea fugiat nostrud aliqua ea laboris incididunt. Sunt ut dolore minim dolor deserunt proident ex anim aliquip voluptate consequat reprehenderit. Irure qui deserunt quis velit ea sint dolor.
          <br/>
          <br/>
          Dolore in mollit mollit enim nostrud non culpa Lorem ut sit anim proident in magna. Dolore ipsum velit dolor ut nostrud consequat occaecat fugiat sint. Aute dolore mollit nulla
          sunt. Ullamco veniam anim non nisi. Veniam Lorem pariatur anim nisi officia magna minim enim tempor ullamco ex esse.
          Eiusmod do do do cillum aliqua ea et tempor. Nisi officia est aliquip pariatur exercitation ad. Enim elit amet anim aliqua cupidatat. Est est qui aute adipisicing fugiat id proident
          deserunt. Id reprehenderit incididunt ex commodo nulla irure cillum minim. Anim nulla quis nulla irure aliqua magna velit amet eu duis consequat elit cillum consectetur.
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What We Do</h1>
        <p className={styles.desc}>
        Id excepteur mollit consequat ut reprehenderit exercitation. Ullamco aliquip do exercitation cillum 
          voluptate nisi id consectetur amet commodo minim.Ex non non nostrud qui ut occaecat magna reprehenderit pariatur eiusmod consectetur.d enim cillum cupidatat fugiat labore elit est est. Ad quis
          id commodo nisi eu aliquip labore duis voluptate est minim minim. Minim culpa velit in et elit quis minim sunt. Esse occaecat minim nulla Lorem consectetur Lorem voluptate officia nostrud aute.
          Consequat proident do culpa laboris minim. Consequat excepteur aliquip occaecat id sint esse ut deserunt sunt ad amet ullamco. 
          Aute consectetur ea fugiat nostrud aliqua ea laboris incididunt. Sunt ut dolore minim dolor deserunt proident ex anim aliquip voluptate consequat reprehenderit. Irure qui deserunt quis velit ea sint dolor.
          <br/>
          -Motor fixing - car repairing -hahshdsdsas
        </p>
        <Button url="/contact" text="Contact"/>
      </div>
      </div>
    </div>
  )
} 

export default About
