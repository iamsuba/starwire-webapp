import React, { useEffect, useState } from 'react';
import styles from './Cards.module.scss'
import { Row, Col, Image } from 'react-bootstrap'
import SelectInput from '../Inputs/SelectInput'
import TextInput from '../Inputs/TextInput';
import StakeholderCard from './StakeholderCard';
import RangeInput from '../Inputs/RangeInput';
import PlusIcon from '../../assets/images/plus.svg'

function TierCard(props) {
    

    const [stakeholdersList, setStakeholdersList] = useState(props.stakeholdersData)
    const [remainingShare, setRemainingShare] = useState(100)
    const [targetTierRevenue, setTargetTierRevenue] = useState(0)

    const getStakeholdersOptions = stakeholdersList.map(stakeholder => {
        return (
            <option value={stakeholder.id}>{stakeholder.firstName + ' ' + stakeholder.lastName}</option>
        )
    })

    const handleSelect = (id) => {
        const newStakeholdersList = [...stakeholdersList]
        newStakeholdersList.find(stakeholder => stakeholder.id == id).active = true
        setStakeholdersList(stakeholdersList => newStakeholdersList)
    }

    const handleShareChange = (value, id) => {
        const newStakeholdersList = [...stakeholdersList]
        newStakeholdersList.find(stakeholder => stakeholder.id == id).share = value
        setStakeholdersList(stakeholdersList => newStakeholdersList)
        //handling remaining share
        let totalUsedShare = 0
        stakeholdersList.map(stakeholder => {
            totalUsedShare =  totalUsedShare + parseInt(stakeholder.share)
        })
        setRemainingShare(100 - totalUsedShare)
        calculateTargetTierRevenue()
    }

    const changePrimaryStakeholder = (id) => {
        const newStakeholdersList = [...stakeholdersList]
        newStakeholdersList.map(stakeholder => {
            stakeholder.primaryStakeholder = stakeholder.id == id ? true : false
        })
        setStakeholdersList(stakeholdersList => newStakeholdersList)
        calculateTargetTierRevenue()
    }

    const changePrimaryStakeholderTarget = (v) => {
        const newStakeholdersList = [...stakeholdersList]
        newStakeholdersList.find(stakeholder => stakeholder.primaryStakeholder == true).targetRevenue = v
        calculateTargetTierRevenue()
    }

    const primaryTargetDisabledStatus = (stakeholdersList.find(stakeholder => stakeholder.primaryStakeholder == true) == undefined) ? true : false

    const calculateTargetTierRevenue = () => {
        //get primary stakeholder share%, get primary stakeholder target revenue, calculate
        const primaryStakeholder = stakeholdersList.find(stakeholder => stakeholder.primaryStakeholder == true)
        if(primaryStakeholder == undefined || primaryStakeholder.share == 0 || primaryStakeholder.targetRevenue == 0 || primaryStakeholder.targetRevenue == undefined) {
            setTargetTierRevenue(0)
        } else {
            const targetBeforeTax = parseFloat(((primaryStakeholder.targetRevenue * 100) / primaryStakeholder.share).toFixed(2))
            setTargetTierRevenue((targetBeforeTax + (targetBeforeTax * 0.03)).toFixed(2))
        }
    }


    let Stakeholders = stakeholdersList.map((stakeholder) => {
        
        const StakeholderImage = require('../../assets/images/stakeholders/'+stakeholder.profilePicture).default
        return(
            <Row className={styles.item} key={stakeholder.id}>
                <Col md={4}>
                    <StakeholderCard name={stakeholder.firstName + ' ' + stakeholder.lastName} role={stakeholder.role} profilePicture={StakeholderImage} />    
                </Col>
                <Col md={8}>
                    {
                        stakeholder.active ? 
                            <RangeInput 
                                onChange={(v) => handleShareChange(v, stakeholder.id)} 
                                percentMode={true} 
                                min="0" 
                                max="100" 
                                maxLimit={remainingShare}
                                value={stakeholder.share}
                                disabled={remainingShare <= 0 ? true : false}
                                inputBox={true} /> :
                            <div className={styles.selectButton} onClick={() => handleSelect(stakeholder.id)}>
                                <Image src={PlusIcon} height="16px" widht="16px" />
                                <div className={styles.text}>Select</div>
                            </div>
                    }
                </Col>
            </Row>
        )
    })


    return(
        <div className={styles.tier}>
            <Row>
                <Col md={3} className={styles.leftContainer}>
                    <div className={styles.title}>Tier I</div>
                    <div className={styles.inputContainer}>
                        <div className={styles.inputItem}>
                            <SelectInput 
                                label="Primary Stakeholder" 
                                text="Select the primary target stakeholder for this tier" 
                                lightMode={true} 
                                options={getStakeholdersOptions}
                                onChange={(v) => changePrimaryStakeholder(v)}/>
                        </div>
                        <div className={styles.inputItem}>
                            <TextInput 
                                className={styles.primaryStakeholderRevenue} 
                                label="Target Revenue for Primary Stakeholder" 
                                type="number" 
                                placeholder="eg: $10,000" 
                                lightMode={true}
                                disabled={primaryTargetDisabledStatus}
                                onChange={(v) => changePrimaryStakeholderTarget(v)} />
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
            <Row className={styles.footer}>
                <Col md={3} className={styles.revenueContainer}>
                    <div className={styles.label}>Target Tier Revenue</div>
                    <div className={styles.value}>${targetTierRevenue}</div>
                </Col>
                <Col md={9} className={styles.footnote}>
                    <div className={styles.message}>Tier revenue target calculated includes a 3% transaction and processing fee</div>
                </Col>
            </Row>
        </div>
    )
}

export default TierCard