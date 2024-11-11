let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let numEl = document.getElementById("num-el")
let count = 0
let totalNumber = count*2

function increment() {
    count += 1
    countEl.textContent = count
}

function totalAmount(){
    let totalNumber = (countEl*2)
    numEl.textContent = totalNumber
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
