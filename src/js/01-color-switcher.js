const buttonStart = document.querySelector('button[data-start]'); 
const buttonStop = document.querySelector('button[data-stop]') 
 
let interval 
 
function getRandomHexColor() { 
    return `#${Math.floor(Math.random() * 16777215) 
        .toString(16) 
        .padStart(6, 0)}`; 
} 
 
buttonStart.addEventListener("click", () => { 
    buttonStart.disabled = true; 
    interval = setInterval(() => { document.body.style.backgroundColor = getRandomHexColor() }, 1000) 
    console.log('hello') 
 
}) 
 
buttonStop.addEventListener("click", () => { 
    buttonStart.disabled = false; 
    clearInterval(interval) 
})
