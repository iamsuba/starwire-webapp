import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import styles from './Modal.module.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import TextInput from '../components/Inputs/TextInput';
import TextAreaInput from '../components/Inputs/TextAreaInput'
import ButtonElement from '../components/ButtonElement'
import ImageUploadInput from '../components/Inputs/ImageUploadInput'

function AccountSettingsModal(props) {
    return(
        <Modal
            className={styles.modalContainer}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Blockchain Wallet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TextInput type="text" label="Enter Blockchain Wallet Address" placeholder="eg: 0xC6C48AbA7e6FF0CF04fADc1CE75Ca8FBdF8E9753" />
            </Modal.Body>
            <Modal.Footer>
                <ButtonElement variant="primary" label="Save" onClick={() => alert('button called')} />
                <ButtonElement variant="secondary" label="Cancel" onClick={props.onHide} />
            </Modal.Footer>
        </Modal>
    )
}

export default AccountSettingsModal