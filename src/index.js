import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Board from './components/board';
import MainTitle from './components/main_title';
import { observe } from './components/game';

const rootEl = document.getElementById('root');
observe(knightPosition =>
    ReactDOM.render(
        <div style={{
            display: 'flex',
            flexDirection:' column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <MainTitle text="Look at My Horse!"/>
            <Board knightPosition={knightPosition} />
        </div>,
        rootEl
    )
);
