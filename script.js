
const bnt = document.getElementById('bnt-one')


function valueInputs() {
    const height = document.getElementById('inputOne').value
    const weight = document.getElementById('inputTwo').value

    let value = parseInt(weight / (height * height)).toFixed(1)

    console.log(value)
    
}


bnt.addEventListener('click', valueInputs)





