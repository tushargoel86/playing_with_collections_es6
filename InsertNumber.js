let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let newNumbers = [] 

for (let i = 0; i < numbers.length; i++) {
     if (i == 5) 
        newNumbers.push(55)
     newNumbers.push(numbers[i])
}

console.log(`Result: ${newNumbers}`)
