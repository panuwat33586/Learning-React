function getMood(){
    const Mood=['Sleepy','Hungry','Lonely','Angry']
    return Mood[Math.floor(Math.random()*Mood.length)]
} 

function MyMood(){
    return (
        <div>
            <h1>My Mood is now: {getMood()}</h1>
        </div>
    )
}

ReactDOM.render(<MyMood/>,document.getElementById("root"))