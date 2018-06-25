import React from 'react';
import PropTypes from 'prop-types';
import { Square } from '../boardField';
import FaCircle from  'react-icons/lib/fa/circle-thin';

const OIcon = (props) => {
    return (
        <Square className={`symbol column${props.position}`}>
           <FaCircle size={65} style={{marginLeft: '-3px',marginTop: '-3px'}}/>
        </Square>
    );
};

OIcon.propTypes = {
    position: PropTypes.number.isRequired
};

export default OIcon;