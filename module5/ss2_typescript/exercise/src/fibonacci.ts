
function displayAndSumFibonacci(number: number):string {
    let fibonacciArr = [0, 1];
    let sum = 1;
    while (number > fibonacciArr.length) {
        let cumulative = 0;
        cumulative = fibonacciArr[fibonacciArr.length - 2] + fibonacciArr[fibonacciArr.length - 1];
        sum += cumulative;
        fibonacciArr.push(cumulative);
    }
    return  fibonacciArr.toString() + " Tổng là: " + sum;
}
console.log(displayAndSumFibonacci(7));
