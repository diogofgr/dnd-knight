import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainTitle extends Component {
    render() {
        const { text } = this.props;
        return <h1 style={{
            color: 'black',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            {this.props.text}
        </h1>;
    }
}

MainTitle.propTypes = {
    black: PropTypes.string
};