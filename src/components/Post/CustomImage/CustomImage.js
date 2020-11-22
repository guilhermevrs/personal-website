import { divide } from 'lodash';
import React from 'react';

const CustomImage = (props) => {
    return <figure class="md-figure">
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.alt}</figcaption>
    </figure>
}

export default CustomImage;