
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






