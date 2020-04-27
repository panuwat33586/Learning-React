class Hello extends React.Component {
    static defaultProps={
        name:'Anonymous',
        greeting:'Hello'
    }
    render() {
        const { name, greeting } = this.props
        return (
            <div>
                <h1>Hello My name is {name}  </h1>
                <h1>Greeting : {greeting}</h1>
            </div>
        )

    }
}

ReactDOM.render(<Hello />, document.getElementById("root"))