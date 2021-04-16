import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ProjectDetailed.module.scss'
import Header from '../components/Header'
import ButtonElement from '../components/ButtonElement'
import Footer from '../components/Footer'
import StakeholderCard from '../components/Cards/StakeholderCard'
//import StakeholderImage from '../assets/images/stakeholders/johndoe.png'

function ProjectDetailed(props) {

    const projectData = props.data[0]
    const projectPoster = require('../assets/images/projects/'+projectData.poster)

    const StakeholderList = projectData.stakeholders.map(stakeholder => {
        const StakeholderImage = require('../assets/images/stakeholders/'+stakeholder.picture)
        console.log(StakeholderImage.default)
        return(
            <Col md={4} className={styles.stakeholderItemContainer}>
                <StakeholderCard profilePicture={StakeholderImage.default} name={stakeholder.firstName + stakeholder.lastName} role={stakeholder.role} />
            </Col>
        )
    })

    return(
        <div className={styles.projectDetailedPage}>
            <Header search={false} />
            <Container className={styles.projectDetailedContainer}>
                <Row>
                    <Col md={4}>
                        <div className={styles.image} style={{backgroundImage: 'url('+projectPoster.default+')'}}></div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.title}>{projectData.name}</div>
                        <div className={styles.statusContainer}>
                            <div className={styles.label}>STATUS</div>
                            <div className={styles.value}>{projectData.status}</div>
                        </div>
                        <div className={styles.desc}>{projectData.desc}</div>
                        <div className={styles.stakeholders}>
                            <div className={styles.title}>Stakeholders</div>
                            <Row>
                                {StakeholderList}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default ProjectDetailed