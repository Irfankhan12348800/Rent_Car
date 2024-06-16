function sortNumbers(arr) {
    // Make a copy of the array to avoid mutating the original array
    const sortedArr = [...arr];

    // Use the built-in sort method with a compare function to sort numbers in ascending order
    sortedArr.sort((a, b) => a - b);

    return sortedArr;
}

// Example usage
const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]
