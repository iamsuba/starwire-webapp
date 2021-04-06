import React from 'react';
import { Form } from 'react-bootstrap';

function TextInput(props) {
    return(
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />
            <Form.Text className="text-muted">{props.text}</Form.Text>
        </Form.Group>
    )
}

export default TextInput