class App extends React.Component {
    render() {
        return (
            <div>
               <Hello
               name='A'
               greeting='Hi friend'
               />
               <Hello/>
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById("root"))