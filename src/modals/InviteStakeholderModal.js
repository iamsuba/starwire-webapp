import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import styles from './Modal.module.scss'
import TextInput from '../components/Inputs/TextInput';
import ButtonElement from '../components/ButtonElement'

function InviteStakeholderModal(props) {
    return(
        <Modal
            className={styles.modalContainer}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Invite Stakeholder
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TextInput type="email" label="Enter the email address of the stakeholder to invite" placeholder="eg: johndoe@email.com" />
            </Modal.Body>
            <Modal.Footer>
                <ButtonElement variant="primary" label="Save" onClick={() => alert('button called')} />
                <ButtonElement variant="secondary" label="Cancel" onClick={props.onHide} />
            </Modal.Footer>
        </Modal>
    )
}

export default InviteStakeholderModal