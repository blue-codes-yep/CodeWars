/// Complete the square sum function so that it squares each number passed into it and then sums the results together.
/// Title: Square(n) Sum

function squareSum(numbers) {
    let numList = numbers.map(x => Math.pow(x, 2));
    const sum = numList.reduce((x, y) => {
        return x + y
    }, 0);
    return sum;
}