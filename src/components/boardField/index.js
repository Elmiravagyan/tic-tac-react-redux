import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Square = styled.div`
  background-color: white;
  border: 1px solid black;
  height: 60px;
  margin: 1px;
  transition: background-color .5s ease;
  width: 60px;
`;

const BoardField = (props) => {
    return <Square onClick={() => props.addSymbol(props.turn)}></Square>;
};

BoardField.propTypes = {
    addSymbol: PropTypes.func.isRequired
};

export default BoardField;