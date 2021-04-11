import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './Inputs.module.scss'

function SelectInput(props) {

    return(
        <Form.Group className={props.lightMode ? "LightBg" : ""}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="select" custom onChange={(e) => props.onChange(e.target.value)}>
                <option value="0">select</option>
                {props.options}
            </Form.Control>
            <Form.Text>{props.text}</Form.Text>
        </Form.Group>
    )
}

export default SelectInput