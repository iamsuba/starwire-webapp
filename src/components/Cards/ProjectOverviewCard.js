import React from 'react';
import styles from './Cards.module.scss'
import ArrowIcon from './../../assets/images/arrow.svg'
import { Image } from 'react-bootstrap'

function ProjectOverviewCard(props) {

    const projectPoster = require('../../assets/images/projects/'+props.image)

    return(
        <div className={props.status == "Finished" ? `${styles.projectOverview} ${styles.finished}` : styles.projectOverview}>
            <div className={styles.title}>{props.title}</div>
            <div className={props.status == "Finished" ? styles.imageFinished : styles.image} style={{backgroundImage: 'url('+projectPoster.default+')'}}></div>
            <div className={styles.desc}>{props.desc}</div>
            <div className={styles.footer}>
                <div className={styles.status}>
                    <div className={styles.label}>STATUS</div>
                    <div className={styles.value}>{props.status}</div>
                </div>
                <Image src={ArrowIcon} width="24px" height="100%" />
            </div>
        </div>
    )
}

export default ProjectOverviewCard