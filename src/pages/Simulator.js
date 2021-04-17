import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './Simulator.module.scss'
import SimulatorIcon from '../assets/images/simulator.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TextInput from '../components/Inputs/TextInput'
import RangeInput from '../components/Inputs/RangeInput'
import TotalStakeholdersRevenueCard from '../components/Cards/TotalStakeholdersRevenueCard'
import TierStatusCard from '../components/Cards/TierStatusCard'
import ButtonElement from '../components/ButtonElement'
import { Chart } from 'react-google-charts'


function Simulator(props) {

    const projectData = props.location.state.projectData

    const [totalTarget, setTotalTarget] = useState(0)

    const handleChange = (v) => {
        console.log(v)
    }

    const TierStatus = projectData.tiers.map(tier => {
        return (
            <div className={styles.item}>
                <TierStatusCard data={tier} />
            </div>
        )
    })

    return(
        <div className={styles.simulatorContainer}>
            <Header search={false} />
            <Container>
                <div className={styles.header}>
                    <Row>
                        <Col md={8} className={styles.titleContainer}>
                            <Image src={SimulatorIcon} height="60px" width="60px" />
                            <div className={styles.info}>
                                <div className={styles.title}>Revenue Simulator</div>
                                <div className={styles.desc}>Enter a total target revenue and use to slider to simulate revenue flow</div>
                            </div>
                        </Col>
                        <Col md={4} className={styles.buttonsContainer}>
                            <div className={styles.item}>
                                <TextInput type="number" placeholder="eg: 1000000" onChange={(v) => setTotalTarget(v)} />
                            </div>
                            <div className={styles.item}>
                                <ButtonElement variant="outline-primary" label="Exit" onClick={() => alert('button called')} />
                            </div>
                        </Col>
                    </Row>

                    <div className={styles.rangeContainer}>
                        <RangeInput 
                            onChange={(v) => handleChange(v)} 
                            min={0} 
                            max={totalTarget} 
                            value={0} />
                    </div>
                </div>
                <div className={styles.chartContainer}>
                <Chart
                    width={'100%'}
                    height={'200px'}
                    chartType="Timeline"
                    loader={<div>Loading Chart</div>}
                    data={[
                            [
                            { type: 'string', id: 'Room' },
                            { type: 'string', id: 'Name' },
                            { type: 'date', id: 'Start' },
                            { type: 'date', id: 'End' },
                            ],
                            [
                                'Planned',
                                'Tier 1',
                                new Date(2021, 3, 1),
                                new Date(2021, 6, 30)
                            ],
                            [
                                'Planned',
                                'Tier 2',
                                new Date(2021, 7, 1),
                                new Date(2021, 9, 30),
                            ],
                            [
                                'Planned',
                                'Tier 3',
                                new Date(2021, 10, 1),
                                new Date(2022, 1, 30),
                            ],
                            [
                                'Actual',
                                'Tier 1',
                                new Date(2021, 3, 1),
                                new Date(2021, 7, 30),
                            ],
                            [
                                'Actual',
                                'Tier 1',
                                new Date(2021, 8, 1),
                                new Date(2021, 11, 30),
                            ],
                            [
                                'Actual',
                                'Tier 1',
                                new Date(2021, 12, 1),
                                new Date(2022, 3, 20),
                            ]
                        ]}
                        options={{
                            timeline: { colorByRowLabel: true, singleColor: '#B35D47' },
                            backgroundColor: '#D6D1C9'
                        }}
                        rootProps={{ 'data-testid': '6' }}
                    />
                </div>
                <div className={styles.contractsContainer}>
                    <div className={styles.item}>
                        <TotalStakeholdersRevenueCard data={projectData} />
                    </div>
                    {TierStatus}
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Simulator