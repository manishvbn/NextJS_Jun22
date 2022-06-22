// const Hello = () => {
//     return React.createElement('h1',
//         { className: 'orange' },
//         'Hello World from React'
//     );
// };

// ReactDOM.render(
//     React.createElement(Hello, {}, null),
//     document.getElementById('app')
// );

// ------------------------------------------ With Props

const Hello = (props) => {
    return React.createElement('h1',
        { className: 'orange' },
        'Hello World from React ' + props.time
    );
};

ReactDOM.render(
    React.createElement(Hello, { time: new Date().toLocaleDateString() }, null),
    document.getElementById('app')
);