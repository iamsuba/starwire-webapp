import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './Inputs.module.scss'
import RangeSlider from 'react-bootstrap-range-slider';

function RangeInput(props) {

    const [value, setValue] = useState(props.value)

    const getToolTipFormatted = () => {
        return "$" + value;
    }

    return(
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <RangeSlider
                value={value}
                onChange={changeEvent => setValue(changeEvent.target.value)}
                min={props.min}
                max={props.max}
                size="lg"
                tooltip="on"
                tooltipLabel={getToolTipFormatted}/>
            <div className={styles.rangeEndPointsContainer}>
                <div className={styles.rangeEndPointValueMin}>${props.min}</div>
                <div className={styles.rangeEndPointValueMax}>${props.max}</div>
            </div>
        </Form.Group>
    )
}

export default RangeInput