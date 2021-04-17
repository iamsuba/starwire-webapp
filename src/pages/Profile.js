import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './Profile.module.scss'
import Header from '../components/Header'
import ButtonElement from '../components/ButtonElement'
import Footer from '../components/Footer'
import ArrowIcon from '../assets/images/arrow.svg'
import AccountIcon from '../assets/images/account.svg'
import SecurityIcon from '../assets/images/security.svg'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Config from '../config'
import BlockchainWalletModal from '../modals/BlockchainWalletModal'
import AccountSettingsModal from '../modals/AccountSettingsModal'
import ChangePasswordModal from '../modals/ChangePasswordModal'

function Profile(props) {


    const projectRequests = Config.requests
    const projects = Config.projects

    const [showBlockchainWalletModal, setShowBlockchainWalletModal] = useState(false)
    const [showAccountSettingsModal, setShowAccountSettingsModal] = useState(false)
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)

    const profilePicture = require('../assets/images/stakeholders/john.png').default

    const Requests = projectRequests.map(request => {
        const projectData = projects[request.projectId]
        const ProjectPoster = require('../assets/images/projects/'+projectData.poster).default
        return(
            <div className={request.status == "pending" ? `${styles.requestContainer} ${styles.pending}` : styles.requestContainer}>
                <Row>
                    <Col md={6} className={styles.leftContainer}>
                        <div className={styles.poster} style={{backgroundImage:"url("+ProjectPoster+")"}} />
                        <div className={styles.title}>{projectData.name}</div>
                    </Col>
                    <Col md={6} className={styles.rightContainer}>
                        <div className={styles.label}>Emile Hirsch has requested you to join as a distributor</div>
                        <Image src={ArrowIcon} width="24px" height="100%" />
                    </Col>
                </Row>
            </div>
        )
    })
    
    return(
        <div>
            <Header search={false} />
            <Container className={styles.profilePage}>
                <div className={styles.profileContainer}>
                    <div className={styles.profilePicture} style={{backgroundImage:"url("+profilePicture+")"}} />
                    <div className={styles.infoContainer}>
                        <div className={styles.name}>John Doe</div>
                        <div className={styles.email}>johndoe@email.com</div>
                    </div>
                </div>
                <Row className={styles.tilesContainer}>
                    <Col md={6} className={styles.itemContainer}>
                        <div className={styles.tile} onClick={() => setShowBlockchainWalletModal(true)}>
                            <div className={styles.topRow}>
                                <div className={styles.label}>Starwire Token Balance</div>
                                <div className={styles.value}>1788.54 STR</div>
                            </div>
                            <div className={styles.bottomRow}>
                                <div className={styles.leftContainer}>
                                    <div className={styles.title}>Blockchain Wallet</div>
                                    <div className={styles.label}>Manage your blockchain wallet, view transactions, change wallet and more</div>
                                </div>
                                <div className={styles.rightContainer}>
                                    <Image src={ArrowIcon} width="24px" height="100%" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className={styles.itemContainer}>
                        <div className={styles.tile} onClick={() => setShowAccountSettingsModal(true)}>
                            <div className={styles.topRow}>
                                <Image src={AccountIcon} width="72px" height="72px" />
                            </div>
                            <div className={styles.bottomRow}>
                                <div className={styles.leftContainer}>
                                    <div className={styles.title}>Account Settings</div>
                                    <div className={styles.label}>Change your profile picture and email address</div>
                                </div>
                                <div className={styles.rightContainer}>
                                    <Image src={ArrowIcon} width="24px" height="100%" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className={styles.itemContainer}>
                        <div className={styles.tile} onClick={() => setShowChangePasswordModal(true)}>
                            <div className={styles.topRow}>
                                <Image src={SecurityIcon} width="72px" height="72px" />
                            </div>
                            <div className={styles.bottomRow}>
                                <div className={styles.leftContainer}>
                                    <div className={styles.title}>Change Password</div>
                                    <div className={styles.label}>Secure your account by changing your password</div>
                                </div>
                                <div className={styles.rightContainer}>
                                    <Image src={ArrowIcon} width="24px" height="100%" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={styles.requests}>
                    <div className={styles.header}>Project Requests</div>
                    {Requests}
                </div>
            </Container>
            <Footer />

            <BlockchainWalletModal show={showBlockchainWalletModal} onHide={() => setShowBlockchainWalletModal(false)} />
            <AccountSettingsModal show={showAccountSettingsModal} onHide={() => setShowAccountSettingsModal(false)} />
            <ChangePasswordModal show={showChangePasswordModal} onHide={() => setShowChangePasswordModal(false)} />
        </div>
    )
}

export default Profile