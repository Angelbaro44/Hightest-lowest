

function highAndLow(numbers) {
      let newlist = [0]
      newlist = numbers.split(' ').sort((a, b) => b - a)
      return (newlist[0] + ' ' + newlist[newlist.length - 1])

}



console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
// Expected result: "542 -214"

console.log(highAndLow("10 2 -2 -10"))
// Expected result: "10 -10"

console.log(highAndLow("1 -1"))
// Expected result: "1 -1"

console.log(highAndLow("1 1"))
// Expected result: "1 1"

console.log(highAndLow("-1 -1"))
// Expected result: "-1 -1"

console.log(highAndLow("1 -1 0"))
// Expected result: "1 -1"

console.log(highAndLow("1 1 0"))
// Expected result: "1 0"

console.log(highAndLow("-1 -1 0"))
// Expected result: "0 -1"

console.log(highAndLow("42"))
// Expected result: "42 42"
