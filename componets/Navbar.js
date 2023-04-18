import React from 'react'
import styles from '../styles/navbar.module.css'

function Navbar() {
  return (
    <div>
      <div className={styles.navContainer}>
        <div className={styles.leftNav}>
         <p className={styles.userName}>Mohammad AlNsour</p>
         <p className={styles.userRole}>Admin</p>

        </div>
        <div className={styles.rightNav}>Your users added <span className={styles.blueLink}> 342 new assets  </span>  since your last login on 23 Nov 2022</div>
      </div>
    </div>
  )
}

export default Navbar
