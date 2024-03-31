## THE QUICK BROWN FOX
This code effectively demonstrates the use of regular expressions in JavaScript to perform string manipulation tasks, specifically targeting and modifying alphabetic characters within a string. The use of the replace method with a function as its second argument allows for dynamic replacement based on the characteristics of the matched characters, making it a powerful tool for string manipulation tasks like this one
## SET UP
The provided code defines a function named swapCase that takes an input string and returns a new string where the case of each alphabetic character in the input string is swapped. This means that if a character is lowercase, it becomes uppercase, and if it's uppercase, it becomes lowercase. The function uses a regular expression to match all alphabetic characters in the input string and then applies a function to each matched character to perform the case swap.

Here's a step-by-step explanation of the code:

Function Declaration: The function swapCase is declared with a single parameter inputString, which is the string whose case will be swapped.
Regular Expression: Inside the function, the replace method of the string is called with two arguments. The first argument is a regular expression /[a-zA-Z]/g, which matches all alphabetic characters in the string. The g flag at the end of the regular expression indicates that the replacement should be performed globally across the entire string, not just the first match.
Replacement Function: The second argument to the replace method is a function that takes a single parameter char, representing the character that was matched by the regular expression. This function checks if the character is lowercase by comparing it to its lowercase version (char === char.toLowerCase()). If the character is lowercase, it converts it to uppercase using char.toUpperCase(). If the character is not lowercase (meaning it's uppercase), it converts it to lowercase using char.toLowerCase().
Return Value: The replace method returns a new string with the case of each alphabetic character swapped, which is then returned by the swapCase function.
Example Usage: An example usage of the swapCase function is provided, where an input string 'The Quick Brown Fox' is passed to the function, and the result is logged to the console. The output of this example usage would be 'tHE qUICK bROWN fOX', where the case of each alphabetic character has been swapped.
## NUMBERS
This function is a straightforward and efficient way to generate a sequence of numbers within a specified range in JavaScript. It's particularly useful for tasks that require iterating over a set of numbers, such as generating test data or performing calculations over a range of values.



##SET UP
The provided code defines a function named generateArray that creates an array of numbers from a specified start value to an end value, inclusive. This function is useful for generating a sequence of numbers within a given range. Here's a breakdown of how the function works:

Function Declaration: The function generateArray is declared with two parameters: start and end. These parameters represent the starting and ending values of the range of numbers to be generated.
Array Initialization: Inside the function, an empty array named array is initialized. This array will be used to store the generated numbers.
Looping Through the Range: A for loop is used to iterate from the start value to the end value, inclusive. The loop variable i is initialized to start and increments by 1 in each iteration until it reaches end.
Adding Numbers to the Array: In each iteration of the loop, the current value of i is pushed into the array using the push method. This effectively adds each number in the range to the array.
Returning the Array: After the loop has finished executing, the function returns the array, which now contains all the numbers from start to end, inclusive.
Example Usage: The function is then demonstrated with two example usages. The first example generates an array of numbers from 4 to 7, inclusive, resulting in [4, 5, 6, 7]. The second example generates an array of numbers from -4 to 7, inclusive, resulting in [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

## PRIME
This code demonstrates a practical application of prime number detection and array filtering in JavaScript. It's a useful example for understanding how to implement and use custom functions to solve specific problems, such as identifying prime numbers within a given range or filtering an array based on a custom condition.


## SET UP
The provided code consists of two functions: isPrime and filterPrimes. The isPrime function checks if a given number is prime, and the filterPrimes function filters an array to return only the prime numbers from it. Here's a detailed explanation of each function and how they work together:

isPrime Function
Purpose: Determines if a number is prime.
Parameters: num - The number to check for primality.
Logic:
If num is less than or equal to 1, it immediately returns false because 1 is not considered a prime number.
It then checks divisibility from 2 up to the square root of num. This is an optimization over checking all numbers up to num, as any factor of num must be less than or equal to its square root.
If num is divisible by any number in this range, it is not prime, and the function returns false.
If no divisors are found, num is prime, and the function returns true.
filterPrimes Function
Purpose: Filters an array to return only the prime numbers.
Parameters: array - The array of numbers to filter.
Logic:
It uses the filter method on the array, which creates a new array with all elements that pass the test implemented by the provided function.
For each element in the array, it calls the isPrime function to check if the element is prime.
If isPrime returns true, the element is included in the new array.
The function returns the new array containing only the prime numbers.
Example Usage
An array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is passed to filterPrimes.
The filterPrimes function iterates over each number in the array and checks if it's prime using the isPrime function.
The prime numbers [2, 3, 5, 7] are returned and logged to the console.
