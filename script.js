let input1;
let input2;

let operator;

const setInput = value => {
    // if input1 is defined, then I want to store the second value in input2
    displayInput(value);
    if (input1) {
        // if there is no operator, then add value to input 1
        if (!operator) {
            let twoDigitInput = input1.toString().concat(value);
            input1 = Number(twoDigitInput);
            console.log(typeof(input1));
        }
        input2 = Number(value);
    } else {
        input1 = Number(value);
       
    }
};

// display numbers of values 
const displayInput = value => {
    document.getElementById("display").innerHTML = value;
};

const setOperator = value => {
  operator = value;
};

// function to clear input and operator
const clear = () => {
    input1 = undefined;
    input2 = undefined;
    operator = undefined;
};

const clearDisplay = () => {
    document.getElementById("display").innerHTML = "0";
};

 // function for addition
const add = (a, b) => {
    return a + b;
};

//function for substraction 
const substract = (a, b) => {
    return a - b;
};

//function for multiplication
const multiply = (a, b) => {
    return a * b;
}

// function for division
const divide = (a, b) => {
  // if second value is 0 , console log something
    if (b == 0) {
        return document.getElementById("display").innerHTML ="do not divide by 0, dummy!";
    }
    return a / b;
}

const calculate = () => {
    switch(operator) {
    case "addition":
      document.getElementById("display").innerHTML = add(input1, input2);
      clear();
      break;
    case "substraction":
      document.getElementById("display").innerHTML = substract(input1, input2);
      clear();
      break;
    case "multiplication":
      document.getElementById("display").innerHTML = multiply(input1, input2);
      clear();
      break;
      case "division":
        document.getElementById("display").innerHTML = divide(input1, input2);
        clear();
        break;
    default: 
      console.log('no input defined');
  }
};

//TODO:
// Refactoring
// inspect substraction with a negative sum
// allow input of 2 digit numbers: Not displayed yet.

// display two digit numners in the display 