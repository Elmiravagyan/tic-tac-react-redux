import React from 'react';
import Board from './components/board';
import Result from './components/results';
import styled from 'styled-components';
import './App.css';

const App = ({className}) => {
    return (
        <div className={className}>
            <Result/>
            <Board />
        </div>
    );
}

export default styled(App)`
  font-family: Courier New, Courier, monospace;
  margin: 0 auto;
  width: 200px;
`;
