
const pinkRing = document.querySelector(".delivery-input")

console.log(pinkRing)



function defaultBorder(){
    pinkRing.style.border = "#ccc 1px solid"
}

function newBorder(){
    pinkRing.style.border = "1px solid #ed017f"
    pinkRing.style.outline = "none;"
}

pinkRing.addEventListener("focus", newBorder, false)
// pinkRing.addEventListener("focus-out", defaultBorder, false)

const tick = document.querySelector(".drip")