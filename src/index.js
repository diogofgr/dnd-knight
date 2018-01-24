import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';
import MainTitle from './components/main_title';
import Previewer from './components/previewer';
import { observe } from './components/game';

const rootEl = document.getElementById('root');
observe(knightPosition =>
    ReactDOM.render(
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <MainTitle text="Look at My Horse!"/>
            <Board knightPosition={knightPosition} />
            <Previewer knightPosition={knightPosition} />
        </div>,
        rootEl
    )
);
