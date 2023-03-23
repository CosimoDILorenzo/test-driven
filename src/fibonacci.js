export default function fibonacci(num) {
    let result = [1,1];
    for (let i = 0; i < num -2; i++) {
        let sum = result[i] + result[i+1];
        result.push(sum)
    }
    return result;
}