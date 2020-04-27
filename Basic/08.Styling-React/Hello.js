class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1 className="Title">Hello See My Style</h1>
                <p className='Paragraph'> This is paragraph</p>
            </div>
        )

    }
}

ReactDOM.render(<Hello />, document.getElementById("root"))