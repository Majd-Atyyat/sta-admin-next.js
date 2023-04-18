import React from 'react'
import styles from '../styles/statistics.module.css'
function Statistics () {
  return (
    <div>
        <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className={styles.numberBox}>
                <div className={styles.blueNumber}>174</div>
                <div className={styles.numberDescription}>
                    <div className={styles.title}>New Accounts Created</div>
                    <div className={styles.UpdateDate}>Last update on 12/06/2022</div>
                </div>
            </div>
            <div className={styles.numberBox}>
                <div className={styles.blueNumber}>5%</div>
                <div className={styles.numberDescription}>
                <div className={styles.title}>Increased Pageviews</div>
                    <div className={styles.UpdateDate}>Last update on 12/06/2022</div>
                </div>
            </div>
        </div>
        <div className={styles.rightSide}>
        <div className={styles.numberBox}>
                <div className={styles.greyNumber}>62</div>
                <div className={styles.numberDescription}>
                    <div className={styles.title}>Tasks Pending</div>
                    <div className={styles.overdue}>23 overdue</div>
                </div>
            </div>
            <div className={styles.numberBox}>
                <div className={styles.greyNumber}>13</div>
                <div className={styles.numberDescription}>
                    <div className={styles.title}>New Notifications</div>
                    <div className={styles.overdue}>23 overdue</div>
                </div>
            </div>
            <div className={styles.numberBox}>
                <div className={styles.greyNumber}>21</div>
                <div className={styles.numberDescription}>
                    <div className={styles.title}>New Requests</div>
                    <div className={styles.overdue}>23 overdue</div>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Statistics 
