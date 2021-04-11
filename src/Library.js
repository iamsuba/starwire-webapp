import styles from './Library.module.scss';
import { Row, Col } from 'react-bootstrap';
import ButtonElement from './components/ButtonElement'
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/Inputs/TextInput'
import SelectInput from './components/Inputs/SelectInput'
import ImageUploadInput from './components/Inputs/ImageUploadInput'
import RangeInput from './components/Inputs/RangeInput'
import ProjectOverviewCard from './components/Cards/ProjectOverviewCard'
import ProjectOverviewImage from './assets/images/projects/intothewild.png'
import StakeholderCard from './components/Cards/StakeholderCard';
import StakeholderImage from './assets/images/stakeholders/johndoe.png'
import TierCard from './components/Cards/TierCard';
import JohndoeImage from './assets/images/stakeholders/johndoe.png'
import EmileImage from './assets/images/stakeholders/emile.png'
import CatherineImage from './assets/images/stakeholders/catherine.png'
import VinceImage from './assets/images/stakeholders/vince.png'

function Library() {

    const stakeholdersData = 
    [
        {
            "id": 1,
            "name": "John Doe",
            "role": "Owner",
            "profilePicture": JohndoeImage,
            "active": false,
            "share": 0
        },
        {
            "id": 2,
            "name": "Emile Hirsch",
            "role": "Distributor",
            "profilePicture": EmileImage,
            "active": false,
            "share": 0
        },
        {
            "id": 3,
            "name": "Catherine Keener",
            "role": "Investor",
            "profilePicture": CatherineImage,
            "active": false,
            "share": 0
        },
        {
            "id": 4,
            "name": "Vince Vaughn",
            "role": "Investor",
            "profilePicture": VinceImage,
            "active": false,
            "share": 0
        }
    ]


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
                            <RangeInput label="Range Input($)" value="0" min="0" max="500000" onChange={(v) => console.log(v)} />
                        </Col>
                        <Col md={12}>
                            <RangeInput label="Range Input(%)" percentMode={true} value="0" min="0" max="100" onChange={(v) => console.log(v)} />
                        </Col>
                    </Row>
            </div>

            <div className={styles.componentContainer}>
                <div className={styles.title}>Cards</div>
                <div className={styles.mrTop}>
                    <Row>
                        <Col lg={3} md={4}>
                            <ProjectOverviewCard 
                                title="Into the Wild"
                                desc="After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life."
                                status="Pre-Revenue"
                                image={ProjectOverviewImage} />
                        </Col>
                    </Row>
                </div>
                <div className={styles.mrTop}>
                    <Row>
                        <Col md={3}>
                            <StakeholderCard role="Owner" />
                        </Col>
                        <Col md={3}>
                            <StakeholderCard name="John Doe" role="Owner" />
                        </Col>
                        <Col md={3}>
                            <StakeholderCard profilePicture={StakeholderImage} name="John Doe" role="Owner" />
                        </Col>
                    </Row>
                </div>
                <div className={styles.mrTop}>
                    <Row>
                        <Col md={12}>
                            <TierCard stakeholdersData={stakeholdersData} />
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}

export default Library;