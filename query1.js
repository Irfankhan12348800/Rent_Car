function countCharacters(str) {
    // Initialize an empty object to store character counts
    const charCount = {};

    // Iterate over each character in the string
    for (let char of str) {
        // If the character is already a key in the object, increment its value
        // Otherwise, add the character as a key with a value of 1
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Return the object with character counts
    return charCount;
}

// Example usage
const result = countCharacters("hello world");
console.log(result); 
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
