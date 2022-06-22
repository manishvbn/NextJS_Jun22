class Hello extends React.Component {
    render() {
        return React.createElement('h1',
            { className: 'orange' },
            'Hello World from React ' + this.props.time
        );
    }
}

ReactDOM.render(
    React.createElement(Hello, { time: new Date().toLocaleDateString() }, null),
    document.getElementById('app')
);