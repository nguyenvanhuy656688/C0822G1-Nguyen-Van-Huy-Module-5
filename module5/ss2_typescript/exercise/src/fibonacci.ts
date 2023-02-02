
function displayAndSumFibonacci(number: number) {
    let fibonacciArr = [0, 1];
    let sum = 1;
    while (number > fibonacciArr.length) {
        let c = 0;
        c = fibonacciArr[fibonacciArr.length - 2] + fibonacciArr[fibonacciArr.length - 1];
        sum += c;
        fibonacciArr.push(c);
    }
    return  fibonacciArr.toString() + " Tổng là: " + sum;
}
console.log(displayAndSumFibonacci(7));