import React, { useEffect, useState } from 'react';
import styles from './Cards.module.scss'
import { Row, Col, Image } from 'react-bootstrap'
import StakeholderCard from './StakeholderCard';
import { PieChart } from 'react-minimal-pie-chart';
import DistinctColors from 'distinct-colors'

function TotalStakeholdersRevenueCard(props) {

    const [stakeholdersList, setStakeholdersList] = useState(props.data.stakeholders)
    const [chartLoading, setChartLoading] = useState(true)
    const [chartData, setChartData] = useState([])

    const rgbToHex = (rgb) => { 
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };
    const fullColorHex = (r,g,b) => {
        let red = rgbToHex(Math.round(r))
        let green = rgbToHex(Math.round(g))
        let blue = rgbToHex(Math.round(b))
        return red+green+blue;
    }

    const colorOptions = {
        color: 25,
        hueMin: 45,
        hueMax: 70,
        chromaMin: 40,
        chromaMax: 80,
        lightMin: 50,
        lightMax: 80
    }
    const colorPalette = DistinctColors(colorOptions)
    const colorPaletteHex = colorPalette.map(color => {
        return '#' + fullColorHex(color._rgb[0], color._rgb[1], color._rgb[2])
    })

    useEffect(() => {

        const newStakeholdersList = [...stakeholdersList]

        const newChartData = newStakeholdersList.map((stakeholder, i) => {
            return({
                color: colorPaletteHex[i],
                title: stakeholder.firstName + ' ' + stakeholder.lastName,
                value: stakeholder.share,
            })
        })

        console.log(newChartData)
        setChartData(newChartData)
        setStakeholdersList(newStakeholdersList)
        setChartLoading(false)

    },[props.stakeholdersData])

    const ChartLabels = chartData.filter(data => data.value > 0).map(data => {
        return(
            <div className={styles.labelItemContainer}>
                <div className={styles.color} style={{backgroundColor:data.color}}></div>
                <div className={styles.name}>{data.title}</div>
            </div>
        )
    })

    let Stakeholders = stakeholdersList.filter(stakeholder => stakeholder.share > 0).map((stakeholder) => {
        const StakeholderImage = require('../../assets/images/stakeholders/'+stakeholder.profilePicture).default
        return(
            <Row className={styles.item} key={stakeholder.id}>
                <Col md={4}>
                    <StakeholderCard name={stakeholder.firstName + ' ' + stakeholder.lastName} role={stakeholder.role} profilePicture={StakeholderImage} />    
                </Col>
                <Col md={2}>
                    <div className={styles.shareContainer}>
                        <div className={styles.label}>Share</div>
                        <div className={styles.value}>{stakeholder.share}%</div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className={styles.revenueContainer}>
                        <div className={styles.label}>Target Reveue</div>
                        <div className={styles.value}>${stakeholder.totalTargetRevenue}</div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className={styles.revenueContainer}>
                        <div className={styles.label}>Revenue Received</div>
                        <div className={styles.value}>${stakeholder.totalReceivedRevenue}</div>
                    </div>
                </Col>
            </Row>
        )
    })


    return(
        <div className={styles.tier}>
            <div className={styles.headerContainer}>
                <div className={styles.title}>Total Stakeholders Revenue</div>
            </div>
            <Row>
                <Col md={3} className={styles.leftContainer}>
                    <div className={styles.chartContainer}>
                    <PieChart
                        style={{height:"70%"}}
                        data={chartData}
                    />
                    <div className={styles.labelsContainer}>
                        {ChartLabels}
                    </div>
                    </div>
                </Col>
                <Col md={9} className={styles.stakeholdersContainer}>
                    <div className={styles.title}>Stakeholders</div>
                    <div className={styles.list}>
                        {Stakeholders}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TotalStakeholdersRevenueCard