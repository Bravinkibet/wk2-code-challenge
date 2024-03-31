// Function to swap the case of each character in a string
function swapCase(inputString) {
    // Using regular expression to replace alphabetic characters with their swapped case
    return inputString.replace(/[a-zA-Z]/g, function(char) {
        // If character is lowercase, convert to uppercase; otherwise, convert to lowercase
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    });
}

// Example usage
let inputString = 'The Quick Brown Fox';
// Calling the swapCase function with the example input string
let outputString = swapCase(inputString);
// Output the swapped string
console.log(outputString); // Output: tHE qUICK bROWN fOX
