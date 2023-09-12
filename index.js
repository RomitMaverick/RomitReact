import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div',
    {id: 'parent'},
    [React.createElement('div', {id: 'child'},
        [React.createElement('h1',{className: 'heading'},'Hello World from React h1!!!'),
        React.createElement('h2',{className: 'heading2'},'Hello World from React h2!!!')]
    ),
    React.createElement('div', {id: 'child'},
        [React.createElement('h1',{className: 'heading'},'Hello World from React h1!!!'),
        React.createElement('h2',{className: 'heading2'},'Hello World from React h2!!!')]
    )]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);