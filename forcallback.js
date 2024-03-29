
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

// setTimeout(() => {console.log("2 seconda are up")}, 500)

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a, b)
    }, 1000)
};

const sum = (a, b) => {
    console.log(a + b);
};

add(1,2,sum);