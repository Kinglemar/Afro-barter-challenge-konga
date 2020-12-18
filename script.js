
const PINKRING = document.querySelector(".drip textarea")

console.log(PINKRING)


function newBorder(){
    PINKRING.style.border = "1px solid #ed017f"
    PINKRING.style.outline = "none"
}

function defaultBorder(){
    PINKRING.style.border = "1px solid #ccc"
    PINKRING.style.outline = "none"
}



PINKRING.addEventListener("focus", newBorder, false)
PINKRING.addEventListener("focus-out", defaultBorder, false)

// ********************************************************************

const starter = document.querySelector(".check input")
const checkBox = document.querySelector(".none")
const collapse = document.querySelector(".drip")

checkBox.classList.remove("hidden")
collapse.classList.add("hidden")

function click(){
    checkBox.classList.toggle("hidden")
    collapse.classList.toggle("hidden")
}

starter.addEventListener("click", click, false)
starter.addEventListener("click", click, false)

// *************************************************************************

