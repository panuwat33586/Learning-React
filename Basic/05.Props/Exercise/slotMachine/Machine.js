class Machine extends React.Component {
    render() {
        const { value } = this.props;
        function random(value) {
            let arrayIndex = Math.floor(Math.random() * value.length)
            return arrayIndex
        };
        const digit1 = value[random(value)];
        const digit2 = value[random(value)];
        const digit3 = value[random(value)];
        
        const win =digit1 == digit2 &&digit2== digit3;
        return (
            <div>
                <h1>Slot Machine</h1>
                <p>{digit1} {digit2} {digit3}</p>
                { win? <p>You win</p> : <p>you lose</p>}
            </div>
        )

    }
}

ReactDOM.render(<Machine />, document.getElementById("root"))