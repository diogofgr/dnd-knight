import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './square';
import { canMoveKnight, moveKnight } from './game';
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd'

const squareTarget = {
    canDrop(props){
        return canMoveKnight(props.x, props.y);
    },

    // The drop method receives the props of the BoardSquare so it
    // knows where to move the knight when it drops.
    // In a real app, I might also use monitor.getItem() to retrieve
    // the dragged item that the drag source returned from beginDrag
    drop(props){
        moveKnight(props.x, props.y);
    }
};

function collect(connect, monitor){
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
export default class BoardSquare extends Component {
    static propTypes = {
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired
    };

    renderOverlay(color){
        return(
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.7,
                backgroundColor: color,
            }} />
        );
    }

    render(){
        const { x, y, connectDropTarget, isOver, canDrop } = this.props;
        const black = (x + y) % 2 === 1;
        
        return connectDropTarget(
            <div style={{
                position: 'relative',
                top: 0,
                left: 0,
                height: '100%'
            }}>
                <Square black={black}>
                    {this.props.children}
                </Square>
                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && canDrop && this.renderOverlay('green')}
            </div>
        );
    }
}