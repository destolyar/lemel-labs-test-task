export function createCounter(counter = 0, min = -Infinity, max = Infinity) {
    const counterId = Math.random() 

    let container = document.createElement("div")
    container.className = "counter-container"

    const decreaseButton = document.createElement("button")
    decreaseButton.className = "counter-container__button"
    decreaseButton.appendChild(document.createTextNode("-"))
    decreaseButton.addEventListener("click", () => {
        const counter = document.getElementById(counterId)
        const counterValue = +counter.textContent.split(" ")[1]
        if (counterValue > min) {
            counter.textContent = `counter: ${counterValue - 1}`
        }
    })

    const increaseButton = document.createElement("button")
    increaseButton.className = "counter-container__button"
    increaseButton.appendChild(document.createTextNode("+"))
    increaseButton.addEventListener("click", () => {
        const counter = document.getElementById(counterId)
        const counterValue = +counter.textContent.split(" ")[1]
        if (counterValue < max) {
            counter.textContent = `counter: ${counterValue + 1}`
        }
    })

    const counterValue = document.createElement("h2")
    counterValue.className = "counter-container__value"
    counterValue.id = counterId
    counterValue.appendChild(document.createTextNode(`counter: ${counter}`))
    
    container.appendChild(counterValue)
    container.appendChild(decreaseButton)
    container.appendChild(increaseButton)
    
    document.body.appendChild(container)
    
    return {
        counter: counter,
        increment() {
            this.counter += 1
        },
        decrement() {
            this.counter -= 1
        }
    }
}