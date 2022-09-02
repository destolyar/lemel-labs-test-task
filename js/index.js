import { createCounter } from './createCounter.js'

let counter1 = createCounter(15)
let counter2 = createCounter(-6)
let counter3 = createCounter(10, -10, 13)

console.log(counter1.counter)
console.log(counter2.counter)
console.log(counter3.counter)

counter1.decrement()
console.log(counter1.counter)
counter3.increment()
console.log(counter3.counter)