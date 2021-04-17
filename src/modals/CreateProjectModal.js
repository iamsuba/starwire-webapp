import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';
import styles from './Modal.module.scss'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import TextInput from '../components/Inputs/TextInput';
import TextAreaInput from '../components/Inputs/TextAreaInput'
import ButtonElement from '../components/ButtonElement'
import ImageUploadInput from '../components/Inputs/ImageUploadInput'
import ProjectCreatedIcon from '../assets/images/project_created.svg'

function CreateProjectModal(props) {

    const [projectCreated, setProjectCreated] = useState(false)

    const hideModal = () => {
        setProjectCreated(false)
        props.onHide()
    }

    const CreateProjectForm = 
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

    const ProjectCreatedMessage = 
        <div className={styles.createdMessage}>
            <Image src={ProjectCreatedIcon} height="96px" width="96px" />
            <div className={styles.msg}>Successfully created the project "Into the wild"</div>
        </div>

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
                { projectCreated ? ProjectCreatedMessage : CreateProjectForm }
            </Modal.Body>
            <Modal.Footer>
                {
                    !projectCreated ? <ButtonElement variant="primary" label="Create" onClick={() => setProjectCreated(true)} /> : ""
                }
                <ButtonElement variant="secondary" label="Close" onClick={hideModal} />
            </Modal.Footer>
        </Modal>
    )
}

export default CreateProjectModal