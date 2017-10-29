let React = require('react');
let ReactDOM  = require('react-dom');

let {WindowArea, MainArea, BottomArea} = require('./areas.jsx');
let {Progress} = require('./progress.jsx');
let {Menu} = require('./menu.jsx');

let menuItems = [
    {
        id: 0,
        value: 'Текущее упражнение',
        link: 'current-lesson'
    },
    {
        id: 1,
        value: 'Упражнения',
        link: 'all-lessons'
    },
    {
        id: 2,
        value: 'Словарь',
        link: 'dictionary'
    },
    {
        id: 3,
        value: 'Статистика',
        link: 'stats'
    },
];

ReactDOM.render(
    <WindowArea>
        <MainArea>
            <p>Main window!</p>
        </MainArea>
        <BottomArea>
            <Progress/>
            <Menu items={menuItems} />
        </BottomArea>
    </WindowArea>
    , document.getElementById('root')
);