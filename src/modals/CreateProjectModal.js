import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import styles from './Modal.module.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import TextInput from '../components/Inputs/TextInput';
import TextAreaInput from '../components/Inputs/TextAreaInput'
import ButtonElement from '../components/ButtonElement'
import ImageUploadInput from '../components/Inputs/ImageUploadInput'

function CreateProjectModal(props) {
    return(
        <Modal
            className={styles.modalContainer}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create a New Project
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6}>
                        <div className={styles.label}>Project Poster</div>
                        <ImageUploadInput />
                    </Col>
                    <Col md={6}>
                        <div className={styles.item}>
                            <TextInput type="text" label="Title" placeholder="eg: Into the wild" />
                        </div>
                        <div className={styles.item}>
                            <TextAreaInput type="desc" label="Email Address" placeholder="eg: johndoe@mail.com" />
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <ButtonElement variant="primary" label="Create" onClick={() => alert('button called')} />
                <ButtonElement variant="secondary" label="Close" onClick={props.onHide} />
            </Modal.Footer>
        </Modal>
    )
}

export default CreateProjectModal