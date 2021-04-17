import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import styles from './Modal.module.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import TextInput from '../components/Inputs/TextInput';
import TextAreaInput from '../components/Inputs/TextAreaInput'
import ButtonElement from '../components/ButtonElement'
import ImageUploadInput from '../components/Inputs/ImageUploadInput'

function BlockchainWalletModal(props) {
    return(
        <Modal
            className={styles.modalContainer}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={4}>
                        <TextInput type="password" label="Current Password" placeholder="password" />
                    </Col>
                    <Col md={4}>
                        <TextInput type="password" label="New Password" placeholder="password" />
                    </Col>
                    <Col md={4}>
                        <TextInput type="password" label="Confirm New Password" placeholder="password" />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <ButtonElement variant="primary" label="Save" onClick={() => alert('button called')} />
                <ButtonElement variant="secondary" label="Cancel" onClick={props.onHide} />
            </Modal.Footer>
        </Modal>
    )
}

export default BlockchainWalletModal