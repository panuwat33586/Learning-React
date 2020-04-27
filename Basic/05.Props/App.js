class App extends React.Component {
    render() {
        return (
            <div>
               <Hello 
               to='James' 
               from='A' 
               isFunny={true} 
               number={3}
               img='https://i0.wp.com/www.hallyukstar.com/wp-content/uploads/2020/01/iu-2020.jpg?fit=800%2C400'
               />
               <Hello 
               to='A' 
               from='B'  
               isFunny={false} 
               number={4}
               img='https://i2.wp.com/www.hallyukstar.com/wp-content/uploads/2019/09/IU_.jpg?fit=800%2C400'
               />
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById("root"))