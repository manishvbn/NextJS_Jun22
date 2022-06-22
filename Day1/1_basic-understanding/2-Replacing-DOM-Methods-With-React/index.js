const rootElement = document.getElementById('app');

const myReactElement = React.createElement('h1',
    { className: 'orange' },
    'Hello World from React'
);

ReactDOM.render(myReactElement, rootElement);