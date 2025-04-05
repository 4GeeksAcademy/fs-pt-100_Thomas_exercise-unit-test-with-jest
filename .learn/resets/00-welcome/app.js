
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = (eur) => {
    let valueInDollar = eur * oneEuroIs["USD"]
    return valueInDollar;
}

const fromDollarToYen = (eur) => {
    let valueInDollar = eur * oneEuroIs["USD"];
    let valueInYen = valueInDollar * oneEuroIs["JPY"]
    return valueInYen;
}

const fromYenToPound = (eur) => {
    let valueInYen = eur * oneEuroIs["JPY"]
    let valueInPound = valueInYen * oneEuroIs["GBP"];
    return valueInPound;
}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }