import React from 'react';
import PropTypes from 'prop-types';
import { Square } from '../boardField';
import FaX from  'react-icons/lib/md/clear';

const XIcon = (props) => {
    return (
        <Square className={`symbol column${props.position}`}>
            <FaX size={90} style={{margin: "-15px"}} />
        </Square>
    );
};

XIcon.propTypes = {
    position: PropTypes.number.isRequired
};

export default XIcon;