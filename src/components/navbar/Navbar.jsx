"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.css';

const links = [
  {
    id: 1, title: "Home", url: "/",
  },
  {
    id: 2, title: "Portfolio", url: "/portfolio"
  },
  {
    id: 3, title: "Blog", url: "/blog"
  },
  {
    id: 4, title: "About", url: "/about"
  },
  {
    id: 5, title: "Contact", url: "/contact"
  },
  {
    id: 6, title: "Dashboard", url: "/dashboard"
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); 
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logoMenuWrapper}>
        <div>
          <Link href="/" className={styles.logo}>
            RUWISE
          </Link>
        </div>
        <div>
          <button
            className={`${styles.burgerButton} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div ref={menuRef}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          </button>
        </div>
      </div>
      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button onClick={() => console.log('logged out')} className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
