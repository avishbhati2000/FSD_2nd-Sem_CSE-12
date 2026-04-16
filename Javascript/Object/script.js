let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York 

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: 2
console.log(numbers[2]); // Output: 3
console.log(numbers[3]); // Output: 4
console.log(numbers[4]); // Output: 5

let mixedArray = [1, "Hello", true, { name: "Alice" }, [1, 2, 3]];
console.log(mixedArray[0]); // Output: 1
console.log(mixedArray[1]); // Output: Hello
console.log(mixedArray[2]); // Output: true
console.log(mixedArray[3]); // Output: { name: "Alice" }
console.log(mixedArray[4]); // Output: [1, 2, 3]

let newarray = [1, 2, 3, 4, 5];
let squaredArray = newarray.map(num=> num * num);
console.log(squaredArray); // Output: [1, 4, 9, 16, 25]