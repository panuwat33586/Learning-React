class App extends React.Component {
    render() {
        return (
            <div>
              <Machine value={[1,2,3,4,5,6,7]}/>
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById("root"))