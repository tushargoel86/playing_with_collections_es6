let numbers = [10, 20, 30, 40, 10, 60, 60, 80, 70, 10]
duplicates = []

numbers.forEach(
    num => {
        if (duplicates[num] == undefined)
            duplicates[num] = 1
        else
            console.log(`${num}` + ' is duplicated')
    }
)
    


