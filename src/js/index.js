const select = document.getElementById('time')
const times = document.querySelectorAll('.block')
const button = document.querySelector('button')

const timeClasses = {
    barcelona: 'blocofcb',
    inter: 'blocointer',
    psg: 'blocopsg',
    argentina: 'blocoarg'
}

function trocarTime() {
    times.forEach(time => time.classList.remove('active'))
    const selectedClass = timeClasses[select.value]
    if (selectedClass) {
        document.querySelector(`.${selectedClass}`).classList.add('active')
    }
}

button.addEventListener('click', trocarTime)
