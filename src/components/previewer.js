import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

export default class Previewer extends Component{
    render(){
        const maxDimension = "40" + (window.innerHeight < window.innerWidth ? "vh" : "vw");
        const [ knightX, knightY] = this.props.knightPosition;

        return <div style={{
            width: maxDimension,
            height: maxDimension,
        }}>
            {this.renderPreview(knightX, knightY)}
        </div>;
    }

    renderPreview(knightX, knightY){
        // give knight coordinates to cylinder:
        return(
            <Scene embedded>
                <Entity position={{x: -4, y: 0, z: -14}} rotation={{x: 0, y: 0, z: 0}}>
                    <Entity
                        geometry={{primitive: 'box'}}
                        material={{color: 'red'}}
                        position={{x: knightX, y: 0.5, z: knightY}}
                        />
                    <Entity position={{x: 4, y: 0, z: 4}}>
                        <Entity
                            geometry={{primitive: 'box'}}
                            material={{color: 'black', src: img}}
                            scale={{x: 8, y: 0.1, z: 8}}
                        />
                    </Entity>
                    <Entity
                        light={{type: 'point', intensity: 0.1}}
                        position={{x: 0, y: 2, z: 0}}
                    />
                </Entity>
            </Scene>
        );
    }
}

Previewer.propTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};

const img = new Image();
img.src = 'data:image/png;base64,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'