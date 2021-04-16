import React, { useEffect, useState } from 'react';
import styles from './Cards.module.scss'
import { Row, Col, Image } from 'react-bootstrap'
import StakeholderCard from './StakeholderCard';

function TierStatusCard(props) {
    

    const [stakeholdersList, setStakeholdersList] = useState(props.stakeholdersData)

    let Stakeholders = stakeholdersList.map((stakeholder) => {
        const StakeholderImage = require('../../assets/images/stakeholders/'+stakeholder.profilePicture).default
        return(
            <Row className={styles.item} key={stakeholder.id}>
                <Col md={4}>
                    <StakeholderCard name={stakeholder.name} role={stakeholder.role} profilePicture={StakeholderImage} />    
                </Col>
                <Col md={2}>
                    <div className={styles.shareContainer}>
                        <div className={styles.label}>Share</div>
                        <div className={styles.value}>46%</div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className={styles.revenueContainer}>
                        <div className={styles.label}>Target Reveue</div>
                        <div className={styles.value}>$250,000</div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className={styles.revenueContainer}>
                        <div className={styles.label}>Revenue Received</div>
                        <div className={styles.value}>$0</div>
                    </div>
                </Col>
            </Row>
        )
    })


    return(
        <div className={
                props.status=="active" ? `${styles.tier} ${styles.active}` : 
                props.status=="completed" ? `${styles.tier} ${styles.completed}` : 
                styles.tier
            }>
            <Row>
                <Col md={3} className={styles.leftContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>Tier I</div>
                        <div className={styles.status}>Status <span className={styles.value}>{props.status}</span></div>
                    </div>
                    <div className={styles.dataContainer}>
                        <div className={styles.revenueContainer}>
                            <div className={styles.label}>Target Revenue</div>
                            <div className={styles.value}>$0</div>
                        </div>
                        <div className={styles.revenueContainer}>
                            <div className={styles.label}>Revenue Generated</div>
                            <div className={styles.value}>$0</div>
                        </div>
                    </div>
                </Col>
                <Col md={9} className={styles.stakeholdersContainer}>
                    <div className={styles.title}>Stakeholders</div>
                    <div className={styles.list}>
                        {Stakeholders}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TierStatusCard