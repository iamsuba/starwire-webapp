import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ImagePlaceholder from '../../assets/images/image128.svg'
import styles from './Inputs.module.scss'

function ImageUploadInput(props) {

    const [image, setImage] = useState(ImagePlaceholder)

    const uploadImage = (e) => {
        if(e.target.files && e.target.files[0]) {
            console.log(e.target.files)
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    return(
        <div>
            <Form.Group className={styles.imageUploadContainer}>
                <div className={styles.image} style={{backgroundImage: 'url('+image+')'}}></div>
                <Form.File label={props.label} onChange={(e) => uploadImage(e)} />
            </Form.Group>
        </div>
    )
}

export default ImageUploadInput