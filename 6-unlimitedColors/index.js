const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color='#';
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * hex.length)]
        
    }
    return color
}
let interval;
function startChangingColor(){
    if(!interval){
        interval = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
        document.querySelector('body').style.backgroundColor=randomColor()
    }
}

function stopChangingColor(){
    clearInterval(interval)
    interval=null;
}
document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)

console.log(randomColor());