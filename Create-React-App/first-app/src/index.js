import React from 'react'
import ReactDOM from 'react-dom'
import {choice,remove} from './helper'
import foods from './foods'

let fruit =choice(foods)

console.log(`I’d like one ${fruit}, please.`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)
let remaining =remove(foods,fruit)
console.log(`I’m sorry, we’re all out. We have ${remaining.length} left.`)


ReactDOM.render(<div>
  <h1>
    Press f12 to see random fruit app
  </h1>
</div>,document.getElementById('root'))








