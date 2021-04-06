import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.scss'

function Footer(props) {
    return(
        <div className={styles.footer}>
            <Container>
                <Row>
                    <Col md={6} className={styles.left}>© Copyrights 2021</Col>
                    <Col md={6} className={styles.right}>StarWire Inc.</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer