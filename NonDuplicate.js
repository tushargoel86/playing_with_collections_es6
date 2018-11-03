let numbers = [10, 20, 30, 40, 10, 60, 60, 80, 70, 10]
let nonDuplicates =[]

numbers.forEach(num => {
    if (nonDuplicates.indexOf(num) == -1)
        nonDuplicates.push(num)
})

console.log('Result is: ' + `${nonDuplicates}`)