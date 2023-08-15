'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Generator from '/public/slideitems/gen.png';
import Ammeter from '/public/slideitems/ammeter.png';
import Wires from '/public/slideitems/wires.png';
import Solar from '/public/slideitems/solar.png';
import Meter from '/public/slideitems/meter.png';
import Cctv from '/public/slideitems/cctv.png';
import Panel from '/public/slideitems/panel.png';
import Fence from '/public/services/electricFence.webp';
import Gate from  '/public/services/gate.jpg';
import Generators from '/public/services/generators.jpg';
import HouseWiring from '/public/services/housewiring.jpg';
import Security from '/public/services/security.jpg';
import Lighting from '/public/services/lighting.jpg';
import PanelBuilding from '/public/services/panelBuilding.jpg'
import SolarPanel from '/public/services/solarpanel.jpg';
import AboutPic from '/public/workers/workerSelfie.jpg'
import Button from '@/components/button/Button';

const imagesArray = [Generator, Ammeter, Wires, Solar, Meter, Cctv, Panel];

export default function Home() {
  const [randomImageIndex, setRandomImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imagesArray.length);
      setRandomImageIndex(randomIndex);
    }, 6500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className={styles.container} id='homepage-container'>
      
         {/*Hero Section */} 
      <div className={styles.smallerContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Your Partner For Cutting-Edge Electrical Services</h1>
          <p className={styles.desc}>
            Do you need a certified electrician for your business or home?{' '}
            <span className={styles.highlight}> Ruwise Electrical Services </span>
            guarantees quality and safe electrical installations.
          </p>
          <Button url="/contact" text="Hire Us!" />
        </div>
        <div className={styles.item}>
          <Image src={imagesArray[randomImageIndex]} alt="Random Hero" className={styles.img} />         
        </div>
      </div>

        {/*about section */}
        <div className={styles.smallerContainer}>
      <div className={styles.item}>
          <Image src={AboutPic} alt="Workers of Ruwise" className={styles.imgStandard} />         
      </div>
      <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.descAbout}>
          At Ruwise Electrical Services, we are your dedicated partners 
          in delivering cutting-edge electrical solutions that empower homes and businesses.
          With a commitment to excellence and safety, we bring decades of experience to every project,
          ensuring that your electrical needs are met with precision and professionalism.
          <br /><br />
          Our team of certified electricians is passionate about providing tailored
          solutions that cater to the unique requirements of each client. 
          From residential wiring and energy-efficient 
          lighting installations to complex commercial projects,
          our expertise spans across a wide spectrum of electrical services.
          </p>
          <Button url="/about" text="Find Out More!" />
     </div>    
    </div>
      
        {/*Services section */}
      <div className={styles.servicesContainer}>
        <h1 className={styles.title}>Our Services</h1>
        
        <div className={styles.services}>

        <div className={styles.service}>  
            <Image src={HouseWiring} alt="House Wiring" className={styles.imgService} />
            <h3 className={styles.descService}>House Wiring</h3>
          </div> 

          <div className={styles.service}>  
            <Image src={PanelBuilding} alt="Panel Building" className={styles.imgService} />
            <h3 className={styles.descService}>Panel Building</h3>
          </div>

          <div className={styles.service}>  
            <Image src={SolarPanel} alt="Solar Panel" className={styles.imgService} />
            <h3 className={styles.descService}>Solar System Installation</h3>
          </div>  
           
          <div className={styles.service}>  
            <Image src={Lighting} alt="Lighting" className={styles.imgService} />
            <h3 className={styles.descService}>Lighting Design</h3>
          </div> 

          <div className={styles.service}>  
            <Image src={Gate} alt="Gate" className={styles.imgService} />
            <h3 className={styles.descService}>Gate Automation</h3>
          </div>     

          <div className={styles.service}> 
            <Image src={Fence} alt="Fence" className={styles.imgService} />
            <h3 className={styles.descService}>Electric Fencing</h3>
          </div>    

          <div className={styles.service}>  
            <Image src={Generators} alt="Generator" className={styles.imgService} />
            <h3 className={styles.descService}>Generator Installation and Maintenance</h3>
          </div> 

          <div className={styles.service}>  
            <Image src={Security} alt="Generator" className={styles.imgService} />
            <h3 className={styles.descService}>Security System Installation</h3>
          </div> 
        </div>
        <Button url="/portfolio" text="Check Out Our Portfolio!" />
      </div>
        {/*Testimonial section */}
        <div className={styles.testimonialsContainer}>
        <h1 className={styles.titleTestimonial}>What Our Clients Say</h1>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              Ruwise Electrical Services exceeded my expectations with their professionalism and attention to detail. From the initial consultation to the final installation, they demonstrated a deep understanding of my electrical needs.
            </p>
            <p className={styles.testimonialName}>John Doe</p>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              I am incredibly impressed with the expertise and efficiency of Ruwise Electrical Services. They transformed our lighting design, creating a comfortable and energy-efficient environment in our home. I highly recommend their services.
            </p>
            <p className={styles.testimonialName}>Jenny Smith</p>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              When it comes to electrical solutions, Ruwise is the name I trust. Their team installed a top-notch generator system for my business, ensuring that we remain operational even during power outages. Their dedication to quality is unmatched.
            </p>
            <p className={styles.testimonialName}>Michael Johnson</p>
          </div>
        </div>
      </div> 
        {/*Contact section */}
       
        <div className={styles.smallerContainer}>
          
        <div className={styles.item}>
          <h1 className={styles.titleContact}>We would love to hear from you!</h1>
          <p className={styles.descContact}>
            Do you have any message you would like to leave for us?<br />
            Fill out the form and we would do our best to reach out as soon as possible.
          </p>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="text" placeholder="email" className={styles.input}/>
          <textarea className={styles.textArea} cols="30" placeholder="message" rows="10"></textarea>
          <Button url="#" text="Send"/>
        </form>
        </div>



    </div>
  );
}
