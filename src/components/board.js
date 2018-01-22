import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BoardSquare from './board_square';
import Knight from './knight';
import { canMoveKnight, moveKnight } from './game';

@DragDropContext(HTML5Backend)
export default class Board extends Component {
    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
            <div
                key={i} 
                style={{width: '12.5%',height: '12.5%'}}
            >
                <BoardSquare x={x} y={y}>
                    {this.renderPiece(x, y)}
                </BoardSquare>
            </div>
        );
    }

    handleSquareClick(toX, toY){
        if (canMoveKnight(toX, toY)){
            moveKnight(toX, toY);
        }
    }

    renderPiece(x, y){
        const [ knightX, knightY] = this.props.knightPosition;
        if (x === knightX && y === knightY){
            return <Knight />;
        }
    }

    render(){
        const squares = [];
        for (let i = 0; i < 64; i++){
            squares.push(this.renderSquare(i));
        }
        // create a square shaped board that adapts to window size (only on page load):
        const maxDimension = "90" + (window.innerHeight < window.innerWidth ? "vh" : "vw");

        return (
            <div style={{
                height: maxDimension,
                width: maxDimension,
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        );
    }
}

Board.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};