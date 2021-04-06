import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonElement(props) {
    return(
        <Button variant={props.variant} onClick={props.onClick}>{props.label}</Button>
    )
}

export default ButtonElement