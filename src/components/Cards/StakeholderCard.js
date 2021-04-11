import React from 'react';
import styles from './Cards.module.scss'
import DefaultPicture from './../../assets/images/userdefault.png'

function StakeholderCard(props) {

    const profilePicture = props.profilePicture ? props.profilePicture : DefaultPicture

    return(
        <div className={styles.stakeholder}>
            <div className={styles.profilePicture} style={{backgroundImage:"url("+profilePicture+")"}} />
            <div className={styles.infoContainer}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.role}>{props.role}</div>
            </div>
        </div>
    )
}

export default StakeholderCard