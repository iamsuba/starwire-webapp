import styles from './Library.module.scss';
import { Row, Col } from 'react-bootstrap';
import ButtonElement from './components/ButtonElement'
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/Inputs/TextInput'
import SelectInput from './components/Inputs/SelectInput'
import ImageUploadInput from './components/Inputs/ImageUploadInput'
import RangeInput from './components/Inputs/RangeInput'

function Library() {
    return(
        <div className={styles.library}>
            Components Library
            <div className={styles.componentContainer}>
                <div className={styles.title}>Buttons</div>
                <div className={styles.itemContainer}>
                    <div className={styles.item}>
                        <ButtonElement variant="primary" label="Primary" onClick={() => alert('button called')} />
                    </div>
                    <div className={styles.item}>
                        <ButtonElement variant="secondary" label="Secondary" onClick={() => alert('button called')} />
                    </div>
                    <div className={styles.item}>
                        <ButtonElement variant="blue" label="Blue" onClick={() => alert('button called')} />
                    </div>
                    <div className={styles.item}>
                        <ButtonElement variant="outline-primary" label="Outline Primary" onClick={() => alert('button called')} />
                    </div>
                    <div className={styles.item}>
                        <ButtonElement variant="outline-secondary" label="Outline Secondary" onClick={() => alert('button called')} />
                    </div>
                    <div className={styles.item}>
                        <ButtonElement variant="outline-blue" label="Outline Blue" onClick={() => alert('button called')} />
                    </div>
                    <div className={styles.item}>
                        <ButtonElement variant="link" label="Transparent" onClick={() => alert('button called')} />
                    </div>
                </div>
            </div>

            <div className={styles.componentContainer}>
                <div className={styles.title}>Header</div>
                    <Header />
            </div>

            <div className={styles.componentContainer}>
                <div className={styles.title}>Footer</div>
                    <Footer />
            </div>

            <div className={styles.componentContainer}>
                <div className={styles.title}>Form Elements</div>
                    <Row>
                        <Col md={4}>
                            <TextInput type="email" label="Email address" placeholder="eg: someone@email.com" text="Input helper text" />
                        </Col>
                        <Col md={4}>
                            <TextInput type="text" label="Text Input" placeholder="eg: input text goes here" text="Input helper text" />
                        </Col>
                        <Col md={4}>
                            <TextInput type="password" label="Password Input" placeholder="password" text="Input helper text" />
                        </Col>
                        <Col md={4}>
                            <ImageUploadInput />
                        </Col>
                        <Col md={4}>
                            <TextInput type="number" label="Number Input" placeholder="eg: 10000" text="Input helper text" />
                        </Col>
                        <Col md={4}>
                            <SelectInput label="Dropdown Select" defaultValue="select" />
                        </Col>
                        <Col md={12}>
                            <RangeInput label="Range Input" value="0" min="0" max="500000" />
                        </Col>
                    </Row>
            </div>
        </div>
    )
}

export default Library;