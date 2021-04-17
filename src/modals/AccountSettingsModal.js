import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import styles from './Modal.module.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import TextInput from '../components/Inputs/TextInput';
import TextAreaInput from '../components/Inputs/TextAreaInput'
import ButtonElement from '../components/ButtonElement'
import ImageUploadInput from '../components/Inputs/ImageUploadInput'

function ChangePasswordModal(props) {
    return(
        <Modal
            className={styles.modalContainer}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Account Settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                        <div className={styles.label}>Change Profile Picture</div>
                        <ImageUploadInput />
                </div>
                <Row>
                    <Col md={6}>
                        <TextInput type="text" label="Username" placeholder="eg: johndoe" />
                    </Col>
                    <Col md={6}>
                        <TextInput type="email" label="Email Address" placeholder="eg: johndoe@email.com" />
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

export default ChangePasswordModal