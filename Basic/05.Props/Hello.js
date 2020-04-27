class Hello extends React.Component {
    render() {
        const {from,to,img}=this.props
        return (
            <div>
                <h1>Hello from {from} to {to}</h1>
                <h2>F12 to see props </h2>
                {console.log(this.props)}
                <img src={img} alt='IU image'/>
            </div>
        )

    }
}

ReactDOM.render(<Hello />, document.getElementById("root"))