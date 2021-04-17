import React from 'react';
import { Form } from 'react-bootstrap';

function TextAreaInput(props) {
    return(
        <Form.Group className={props.lightMode ? "LightBg" : ""}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="textarea" rows={8} />
        </Form.Group>
    )
}

export default TextAreaInput