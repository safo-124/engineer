"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import SelfieMan from "public/homepics/selfie-with-friends.jpg";
import GeneratorShow from "public/homepics/front-generator.jpg";
import SittingOnBomb from "public/homepics/sitting-on-bomb.jpg";
import TableWork from "public/homepics/working-on-table.jpg";
import ThePanel from "public/homepics/the-panel.jpg";
import AnotherGenerator from "public/homepics/another-generator.jpg";
import Fence from "/public/services/electricFence.webp";
import Gate from "/public/services/gate.jpg";
import Generators from "/public/services/generators.jpg";
import HouseWiring from "/public/services/housewiring.jpg";
import Security from "/public/services/security.jpg";
import Lighting from "/public/services/lighting.jpg";
import PanelBuilding from "/public/services/panelBuilding.jpg";
import SolarPanel from "/public/services/solarpanel.jpg";
import AboutPic from "/public/workers/workerSelfie.jpg";
import Button from "@/components/button/Button";

import ReactPlayer from "react-player";

{
  /*import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/
}

const imagesArray = [
  SelfieMan,
  GeneratorShow,
  SittingOnBomb,
  TableWork,
  ThePanel,
  AnotherGenerator,
];

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Wait for the video to load before showing the text
    const videoElement = document.getElementById("landing-video");
    videoElement.addEventListener("loadeddata", () => {
      setShowText(true);
    });
  }, []);

  const sliderSettings = {
    autoplay: true,
    dots: false,
    infinite: true,
    arrows: true,
    customPaging: (i) => (
      <div className={styles.customDot}></div> // Use a custom dot element
    ),
  };

  {
    /*const [randomImageIndex, setRandomImageIndex] = useState(0);*/
  }

  {
    /*useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imagesArray.length);
      setRandomImageIndex(randomIndex);
    }, 6500); 

    return () => clearInterval(interval); 
  }, []);
*/
  }
  return (
    <div className={styles.container} id="homepage-container">
      <div className={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", display: "flex" }}
          className={styles.video}
          id="landing-video"
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/test-app-24d4e.appspot.com/o/land-gen.mp4?alt=media&token=d46ece03-5887-4fd3-96f9-33319117fc5b"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)", // Dark overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className={styles.videoText}>
            <h1
              className={styles.typingText} // Apply animation class when showText is true
              style={{
                background: "linear-gradient(to bottom, #e8e8e8, #ecb5b5)", // Reddish-white gradient
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              <span
                className={styles.delayedText}
                style={{
                  animation:
                    "typing 7s steps(30, end) 10s, delayedCursor 0.5s step-end infinite 3s",
                }}
              >
                We Are Ruwise.
              </span>
              <br /> Your Partner For Electrical Services.
            </h1>
          </div>

          <p style={{ color: "#fff", fontSize: "1.2rem" }}></p>
        </div>
      </div>

      {/*features section*/}
      <div className={styles.featuresContainer}>
        <div className={styles.featuresCard}>
          <h1>Expert Wiring Solutions</h1>
          <p>
            From design to installation, we power your spaces with precision.
            Homes or businesses, our electrical mastery ensures safety and
            seamless functionality.
          </p>
        </div>
        <div className={styles.featuresCard}>
          <h1>Green Energy Partners</h1>
          <p>
            Elevate efficiency with tailored energy solutions. Minimize costs,
            maximize sustainability. Let us create an eco-friendly future, one
            connection at a time.
          </p>
        </div>
        <div className={styles.featuresCard}>
          <h1>Your Safety, Our Priority</h1>
          <p>
            Elevate efficiency with tailored energy solutions. Minimize costs,
            maximize sustainability. Let's create an eco-friendly future, one
            connection at a time.
          </p>
        </div>
        <div className={styles.featuresCard}>
          <h1>Swift Sparks Service</h1>
          <p>
            Sparks flew? We're on it. Our rapid-response team swiftly
            troubleshoots and repairs, restoring power and confidence—anytime,
            anywhere.{" "}
          </p>
        </div>
      </div>

      {/*about section */}
      <div className={styles.smallerContainer}>
        <Image
          src={SittingOnBomb}
          alt="Workers of Ruwise"
          className={styles.imgStandard}
        />

        <div className={styles.item}>
          <h1 className={styles.aboutTitle}>Who Are We?</h1>
          <p className={styles.descAbout}>
            At Ruwise Electrical Services, we are your dedicated partners in
            delivering cutting-edge electrical solutions that empower homes and
            businesses. With a commitment to excellence and safety, we bring
            decades of experience to every project, ensuring that your
            electrical needs are met with precision and professionalism.
            <br />
            <br />
            Our team of certified electricians is passionate about providing
            tailored solutions that cater to the unique requirements of each
            client. From residential wiring and energy-efficient lighting
            installations to complex commercial projects, our expertise spans
            across a wide spectrum of electrical services.
          </p>
          <Button url="/about" text="Find Out More" />
        </div>
      </div>

      {/*Services section */}
      <div className={styles.servicesContainer}>
        <h1 className={styles.title}>Our Services</h1>

        <div className={styles.services}>
          <div className={styles.service}>
            <Image
              src={HouseWiring}
              alt="House Wiring"
              className={styles.imgService}
            />
            <h3 className={styles.descService}>House Wiring</h3>
          </div>

          <div className={styles.service}>
            <Image
              src={PanelBuilding}
              alt="Panel Building"
              className={styles.imgService}
            />
            <h3 className={styles.descService}>Panel Building</h3>
          </div>

          <div className={styles.service}>
            <Image
              src={SolarPanel}
              alt="Solar Panel"
              className={styles.imgService}
            />
            <h3 className={styles.descService}>Solar System Installation</h3>
          </div>

          <div className={styles.service}>
            <Image
              src={Lighting}
              alt="Lighting"
              className={styles.imgService}
            />
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
            <Image
              src={Generators}
              alt="Generator"
              className={styles.imgService}
            />
            <h3 className={styles.descService}>
              Generator Installation and Maintenance
            </h3>
          </div>

          <div className={styles.service}>
            <Image
              src={Security}
              alt="Generator"
              className={styles.imgService}
            />
            <h3 className={styles.descService}>Security System Installation</h3>
          </div>
        </div>
        <Button url="/portfolio" text="Review Our Portfolio" />
      </div>
      {/*Testimonial section */}
      <div className={styles.testimonialsContainer}>
        <h1 className={styles.titleTestimonial}>What Our Clients Say</h1>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              Ruwise Electrical Services exceeded my expectations with their
              professionalism and attention to detail. From the initial
              consultation to the final installation, they demonstrated a deep
              understanding of my electrical needs.
            </p>
            <p className={styles.testimonialName}>John Doe</p>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              I am incredibly impressed with the expertise and efficiency of
              Ruwise Electrical Services. They transformed our lighting design,
              creating a comfortable and energy-efficient environment in our
              home. I highly recommend their services.
            </p>
            <p className={styles.testimonialName}>Jenny Smith</p>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.testimonialText}>
              When it comes to electrical solutions, Ruwise is the name I trust.
              Their team installed a top-notch generator system for my business,
              ensuring that we remain operational even during power outages.
              Their dedication to quality is unmatched.
            </p>
            <p className={styles.testimonialName}>Michael Johnson</p>
          </div>
        </div>
      </div>
      {/*Contact section */}

      <div className={styles.smallerContainer}>
        <div className={styles.item}>
          <h1 className={styles.titleContact}>
            We would love to hear from you!
          </h1>
          <p className={styles.descContact}>
            Do you have any message you would like to leave for us?
            <br />
            Fill out the form and we would do our best to reach out as soon as
            possible.
          </p>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            cols="30"
            placeholder="message"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}
