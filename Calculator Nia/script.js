const numbers = document.querySelectorAll(".number")
//console.log(numbers)
const calculatorScreen = document.querySelector('.calculator-screen')

let prevNumber = ''
let calculationOperator =''
let currentNumber ='0'

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber =(number) => {
    //currentNumber += number
    if(currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }

}

numbers.forEach ((number) => {
    //console.log(number)
    number.addEventListener("click", (event) => {
        //console.log("number is pressed")
        //console.log(event.target.value)
        //updateScreen(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

/*const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})*/

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        //console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if ( calculationOperator === '') {
         prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    //console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            //break
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    //console.log('AC Button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    //console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
