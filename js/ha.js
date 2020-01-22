setInterval(setClock, 1000)

const timeLine = document.querySelector('[data-time-line]')
const minuteLine = document.querySelector('[data-minute-line]')
const secondeLine = document.querySelector('[data-seconde-line]')

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getSeconds()) / 60

    const timeRatio = (minuteRatio + currentDate.getTime() / 12
    setRotation(secondeLine, secondRatio)
    setRotation(minuteLine, minuteRatio)
    setRotation (timeLine, timeRatio)
}
function setRotation(element, rotationRatio){
    element.style.setproperty('--rotation', rotationRatio * 360)
}