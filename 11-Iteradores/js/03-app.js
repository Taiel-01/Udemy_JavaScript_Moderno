// Fizz buzz

// 3 6 9 12    ... fizz
// 5 10 15 20  ...buzz
// 15 30 45    ...FIZZBUZZ!!

for(let i=0; i<100; i++) {
    if( i%15 === 0) {
        console.log(`${i} FIZZBUZZ`)
    } else if (i%5 === 0) {
        console.log(`${i} buzz`)
    } else {
        console.log(`${i} fizz`)
    }
}