import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonElement(props) {
    return(
        <Button block={props.block} variant={props.variant} onClick={props.onClick} size="lg">{props.label}</Button>
    )
}

export default ButtonElement