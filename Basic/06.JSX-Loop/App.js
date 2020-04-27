class App extends React.Component {
    render() {
        return (
            <div>
               <Friends
               names={['Josh','Andrew','Peter','James']}
               />
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById("root"))