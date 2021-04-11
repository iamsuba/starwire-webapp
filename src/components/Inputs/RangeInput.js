import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './Inputs.module.scss'
import RangeSlider from 'react-bootstrap-range-slider';

function RangeInput(props) {


    console.log(props.maxLimit)
    const [value, setValue] = useState(props.value)

    const getValueFormatted = (formatValue) => {
        if(props.percentMode) {
            return formatValue + "%";
        } else {
            return "$" + formatValue;
        }
    }

    const handleChange = (e) => {
        let targetValue = parseInt(e.target.value)
        let currentValue = parseInt(value)
        console.log(targetValue, currentValue, targetValue-currentValue, props.maxLimit)
        if((targetValue-currentValue) > props.maxLimit) {
            console.log("preventing")
            e.preventDefault()
        } else {
            setValue(e.target.value)
            props.onChange(targetValue)
        }
    }

    return(
        <Form.Group>
            {
                props.label !== undefined ? <Form.Label>{props.label}</Form.Label> : null
            }
            <div className={styles.rangeContainer}>
                {
                    props.inputBox !== undefined ? <Form.Control className={styles.inputBox} value={value} onChange={(e) => handleChange(e)} /> : null
                } 
                <div className={styles.slider}>
                    <RangeSlider
                        value={value}
                        onChange={(e) => handleChange(e)}
                        min={props.min}
                        max={props.max}
                        size="sm"
                        tooltip="auto"
                        tooltipLabel={() => getValueFormatted(value)}
                        disabled={props.disabled && value == 0}/>
                    <div className={styles.rangeEndPointsContainer}>
                        <div className={styles.rangeEndPointMin}>{getValueFormatted(props.min)}</div>
                        <div className={styles.rangeEndPointMax}>{getValueFormatted(props.max)}</div>
                    </div>
                </div>   
            </div>
        </Form.Group>
    )
}

export default RangeInput