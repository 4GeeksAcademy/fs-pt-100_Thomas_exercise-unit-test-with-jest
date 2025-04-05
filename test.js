// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const convertedUSD = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; // 3.745
    
    // This is the comparison for the unit test
     expect(convertedUSD).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 150.22 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const convertedYen = fromDollarToYen(180.01);

    const expected = (180.01 / 1.07) * 156.5; 
    
    // This is the comparison for the unit test
     expect(convertedYen).toBe(expected); 
})

test("One yen should be 0.0052 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const convertedPounds = fromYenToPound(555.56);

    const expected = (555.56 / 156.5) * 0.87; 
    
    // This is the comparison for the unit test
     expect(convertedPounds).toBe(expected); 
})