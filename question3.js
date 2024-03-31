// Function to check if a number is prime
function isPrime(num) {
    // If number is less than or equal to 1, it's not prime
    if (num <= 1) {
        return false;
    }
    // Check divisibility from 2 up to square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by i, it's not prime
        if (num % i === 0) {
            return false;
        }
    }
    // If no divisors found, num is prime
    return true;
}

// Function to filter prime numbers from an array
function filterPrimes(array) {
    // Filter the array by checking each element with isPrime function
    return array.filter(function(num) {
        return isPrime(num);
    });
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimes(inputArray);
console.log(primeNumbers); // Output: [2, 3, 5, 7]