import React from 'react';
import { Form } from 'react-bootstrap';

function SelectInput(props) {
    return(
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="select" custom>
                <option value="0">select</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </Form.Control>
        </Form.Group>
    )
}

export default SelectInput