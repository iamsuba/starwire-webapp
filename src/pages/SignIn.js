import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './SignIn.module.scss'
import Footer from '../components/Footer'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import LogoColor from '../assets/images/logo.png'
import TextInput from '../components/Inputs/TextInput';
import ButtonElement from '../components/ButtonElement'
import ImageUploadInput from '../components/Inputs/ImageUploadInput'

function SignIn(props) {

    const [mode, setMode] = useState('signin')

    const SignInContainer = 
        <div className={styles.singIn}>
            <Row>
                <Col md={5} className={styles.leftContainer}>
                    <Image src={LogoColor} height="40px" />
                    <div className={styles.desc}>Sign or create new account to create and participate in creative projects.</div>
                </Col>                    
                <Col md={{ span: 6, offset: 1 }} className={styles.rightContainer}>
                    <div className={styles.title}>Sign In</div>
                    <div className={styles.formContainer}>
                        <div className={styles.item}>
                            <TextInput type="text" label="Username" placeholder="eg: johdndoe" />
                        </div>
                        <div className={styles.item}>
                            <TextInput type="password" label="Password" placeholder="password" />
                        </div>
                        <div className={styles.item}>
                            <ButtonElement variant="primary" block={true} label="Sign In" onClick={() => alert('button called')} />
                            <ButtonElement variant="link" block={true} label="Create a new account" onClick={() => setMode('signup')} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    
    const SingUpContainer = 
        <div className={styles.signUp}>
            <div>
                <Image src={LogoColor} height="30px" />
            </div>
            <div className={styles.title}>Create a new account</div>
            <div className={styles.formContainer}>
                <Row>
                    <Col md={6}>
                        <div className={styles.label}>Profile Picture</div>
                        <ImageUploadInput />
                        <div className={styles.item}>
                            <TextInput type="text" label="Blockchain Address" placeholder="eg: 0xC6C48AbA7e6FF0CF04fADc1CE75Ca8FBdF8E9753" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.item}>
                            <TextInput type="text" label="Username" placeholder="eg: jodhndoe" />
                        </div>
                        <div className={styles.item}>
                            <TextInput type="email" label="Email Address" placeholder="eg: johndoe@mail.com" />
                        </div>
                        <div className={styles.item}>
                            <TextInput type="password" label="Password" placeholder="password" />
                        </div>
                        <div className={styles.item}>
                            <TextInput type="password" label="Confirm Password" placeholder="password" />
                        </div>
                    </Col>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.item}>
                            <ButtonElement variant="primary" block={true} label="Create" onClick={() => alert('button called')} />
                        </div>
                        <div className={styles.item}>
                            <ButtonElement variant="secondary" block={true} label="Cancel" onClick={() => setMode('signin')} />
                        </div>
                    </div>
                </Row>
            </div>
        </div>

    return(
        <div className={styles.signInContainer}>
            <Container>
                { mode == "signin" ? SignInContainer : SingUpContainer }
            </Container>
        </div>    
    )
}

export default SignIn