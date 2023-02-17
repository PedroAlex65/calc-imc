
const bnt = document.getElementById('bnt-one')


function valueInputs() {
    const height = document.getElementById('inputOne').value
    const weight = document.getElementById('inputTwo').value

    let value = parseInt(weight / (height * height)).toFixed(1)




    const bntThree = document.querySelector('.bnt-three')
    bntThree.style.display = 'block'
    bntThree.innerHTML = `SEU IMC: </br> ${value}`


    const trOne = document.querySelector('.tr-one')
    const trTwo = document.querySelector('.tr-two')
    const trThree= document.querySelector('.tr-three')
    const trFour = document.querySelector('.tr-four')
    const trFive = document.querySelector('.tr-five')

    if(value < 18.5){
        trOne.style.background = ' #E0FFFF'
    }

    if(value >18.5 && value <= 24.9){
        trTwo.style.background = ' #E0FFFF'
    }

    if(value >= 25.0 && value <=29.9){
        trThree.style.background = ' #E0FFFF'
    }

    if(value >= 30.0 && value <= 39.9){
        trFour.style.background = ' #E0FFFF'
    }

    if(value >= 40.0){
        trFive.style.background = ' #E0FFFF'
    }
}


bnt.addEventListener('click', valueInputs)




const btnTwo = document.getElementById('bnt-two')

function clearInput(){

     document.getElementById('inputOne').value = ' '
    document.getElementById('inputTwo').value = ' '

    const bntThree = document.querySelector('.bnt-three')
    bntThree.style.display = 'none'


    const trOne = document.querySelector('.tr-one')
    trOne.style.background = ' #fff'
    const trTwo = document.querySelector('.tr-two')
    trTwo.style.background = ' #fff'
    const trThree= document.querySelector('.tr-three')
    trThree.style.background = ' #fff'
    const trFour = document.querySelector('.tr-four')
    trFour.style.background = ' #fff'
    const trFive = document.querySelector('.tr-five')
    trFive.style.background = ' #fff'

}


btnTwo.addEventListener('click', clearInput)