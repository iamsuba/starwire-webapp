import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './ProjectDetailed.module.scss'
import Header from '../components/Header'
import ButtonElement from '../components/ButtonElement'
import Footer from '../components/Footer'
import StakeholderCard from '../components/Cards/StakeholderCard'
import ContractIcon from '../assets/images/contract.svg'
import TierCard from '../components/Cards/TierCard'

function ProjectDetailed(props) {

    const [showContractBuilder, setShowContractBuilder] = useState(false)

    const projectData = props.data
    const projectPoster = require('../assets/images/projects/'+projectData.poster).default

    const createContract = () => {
        setShowContractBuilder(false)
    }

    const StakeholderList = projectData.stakeholders.map(stakeholder => {
        const StakeholderImage = require('../assets/images/stakeholders/'+stakeholder.profilePicture).default
        return(
            <Col md={4} className={styles.stakeholderItemContainer}>
                <StakeholderCard profilePicture={StakeholderImage} name={stakeholder.firstName + ' ' + stakeholder.lastName} role={stakeholder.role} />
            </Col>
        )
    })

    const ContractBuilderEmptyMessage =
        <div className={styles.emptyMessageContainer}>
            <Image src={ContractIcon} height="96px" width="96px" />
            <div className={styles.title}>Create Financial Contract</div>
            <div className={styles.desc}>Use the smart contract builder to create tiers, configure payment distribution, publish to the blockchain and track it.</div>
            <ButtonElement variant="primary" label="Create" onClick={() => setShowContractBuilder(true)} />
        </div>

    const ContractBuilder =
        <div className={styles.contractBuilder}>
            <Row className={styles.menu}>
                <Col md={6} className={styles.titleContainer}>
                    <img src={ContractIcon} width="48px" />
                    <div className={styles.title}>Financial Contract Builder</div>
                </Col>
                <Col md={6} className={styles.buttonsContainer}>
                    <div className={styles.item}>
                        <ButtonElement variant="primary" label="Save" onClick={() => alert("saving")} />
                    </div>
                    <div className={styles.item}>
                        <ButtonElement variant="secondary" label="Cancel" onClick={() => createContract()} />
                    </div>
                </Col>
            </Row>
            <div className={styles.tiersContainer}>
                <div className={styles.item}>
                    <TierCard stakeholdersData={projectData.stakeholders} />
                </div>
                <ButtonElement variant="outline-primary" block={true} label="Add Tier" onClick={() => alert("button called")} />
            </div>
        </div>

    return(
        <div className={styles.projectDetailedPage}>
            <Header search={false} />
            <Container>
                <div className={styles.projectDetailedContainer}>
                    <Row>
                        <Col md={4}>
                            <div className={styles.image} style={{backgroundImage: 'url('+projectPoster+')'}}></div>
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
                                    <Col md={4} className={styles.stakeholderItemContainer}>
                                        <ButtonElement variant="outline-primary" label="Add a Stakeholder" onClick={() => alert('button called')} block={true} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={styles.contractContainer}>
                    {
                        showContractBuilder ? ContractBuilder : ContractBuilderEmptyMessage
                    }
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default ProjectDetailed