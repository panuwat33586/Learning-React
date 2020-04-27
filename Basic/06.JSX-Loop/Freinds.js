class Friends extends React.Component {
    render() {
        const { names } = this.props
        return (
            <div>
                <h1>My freind list</h1>
                <ul>
                    {names.map(name => <li>{name}</li>)}
                </ul>
            </div>
        )

    }
}

ReactDOM.render(<Friends />, document.getElementById("root"))