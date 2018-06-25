import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import BoardField from '../boardField';
import XIcon from '../xIcon';
import OIcon from '../oIcon';
import { X, O } from '../../symbols/symbols';
import { addSymbol, startAgain } from '../../actions/actions';
import { connect } from 'react-redux';

class Board extends Component {
    addSymbol (rowIndex, position, symbol) {
        !this.props.won && this.props.addSymbol(rowIndex, position, symbol);
    }

    getSymbol(rowIndex, position, symbol) {
        if (symbol === X) {
            return <XIcon key={position} position={position} />;
        }
        if (symbol === O) {
            return <OIcon key={position} position={position} />;
        }
        return <BoardField key={position} addSymbol={this.addSymbol.bind(this, rowIndex, position)} turn={this.props.turn} />;
    }

    render() {
        const wonClass   = this.props.won ? ` won-${this.props.wonLine}` : '';
        const drawClass  = this.props.draw ? ' draw' : '';
        const boardClass = 'board' + wonClass + drawClass;
        return (
            <Fragment>
            <div className={boardClass} style={{display: "flex",paddingTop: "auto"}}>
                {
                    Object.keys(this.props.board)
                        .map(rowIndex => {
                            return (
                                <div className={`row row${rowIndex}`} key={rowIndex}>
                                    {
                                        this.props.board[rowIndex].map((symbol, positon) => {
                                            return this.getSymbol(rowIndex, positon, symbol);
                                        })
                                    }
                                </div>
                            );
                        })
                }
            </div>
                <div>
                {
                    this.props.won || this.props.draw ?
                        <p className="startAgain" onClick={this.props.startAgain}>
                            Click to start again!
                        </p> : false
                }
            </div>
            </Fragment>
        );
    }
}

Board.propTypes = {
    board: PropTypes.object.isRequired,
    turn: PropTypes.string.isRequired,
    won: PropTypes.string,
    draw: PropTypes.bool.isRequired,
    wonLine: PropTypes.string,
    addSymbol: PropTypes.func.isRequired,
    startAgain: PropTypes.func.isRequired
};

export default connect(
    ({board, turn, won, draw, wonLine}) => ({
        board, turn, won, draw, wonLine
    }),
    (dispatch) => {
        return {
            addSymbol (rowIndex, position, symbol) {
                dispatch(addSymbol(rowIndex, position, symbol));
            },
            startAgain () {
                dispatch(startAgain());
            }
        };
    }
)(Board);

export {Board};
