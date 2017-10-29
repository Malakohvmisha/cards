let React = require('react');
let ReactDOM  = require('react-dom');
let WindowArea = require('./window-area.jsx');
let MainArea = require('./main-area.jsx');
let BottomArea = require('./bottom-area.jsx');

let Progress = require('./progress.jsx');
let Menu = require('./menu.jsx');

let root = document.getElementById('root');

ReactDOM.render(
    <WindowArea>
        <MainArea>
            <h1>HELLO!</h1>
        </MainArea>
        <BottomArea>
            <Progress />
            <Menu />
        </BottomArea>
    </WindowArea>
    , root
);