function fibonacci(n) {
    // Handle edge cases for n = 0 and n = 1
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Initialize the first two numbers in the Fibonacci sequence
    let a = 0;
    let b = 1;

    // Iterate to compute the n-th Fibonacci number
    for (let i = 2; i <= n; i++) {
        let next = a + b; // Calculate the next Fibonacci number
        a = b;           // Update a to the current b
        b = next;        // Update b to the next Fibonacci number
    }

    // Return the n-th Fibonacci number
    return b;
}

// Example usage
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(10)); // Output: 55
