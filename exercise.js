// Any Value as a Key: Unlike objects, where keys must be strings or symbols, a Map can use any value (including objects, functions, or primitive types) as a key.

// Order of Entries: Map maintains the insertion order of its entries, meaning you can reliably iterate over the entries in the order they were added.

// Size Property: Map has a size property that returns the number of key-value pairs in the Map.

// Built-in Methods:

// set(key, value): Adds or updates an entry in the Map.
// get(key): Retrieves the value associated with the key.
// has(key): Returns a boolean indicating whether an entry with the specified key exists in the Map.
// delete(key): Removes the entry with the specified key.
// clear(): Removes all entries from the Map.
// keys(): Returns an iterator for the keys.
// values(): Returns an iterator for the values.
// entries(): Returns an iterator for the key-value pairs.
//
const myMap = new Map();

myMap.set('name', 'bobo');
myMap.set(1, 'one');
myMap.set(true, 'true');
console.log(myMap.get('name'));
console.log(myMap.get(1));
console.log(myMap.get(true));
console.log(myMap.has('name'));
console.log(myMap.has('age'));
myMap.delete(1);
console.log(myMap.has(1));
console.log(myMap.size);

// Iterating over the Map (value => key to key=>value)
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Getting all keys
for (let key of myMap.keys()) {
    console.log(key);
}
// Getting all values
for (let value of myMap.values()) {
    console.log(value);
}
// Getting all entries
for (let [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}
// Clearing the Map
myMap.clear();
console.log(myMap.size);

// constructor function (function name should me Capitalized)
function User(name,age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `name is ${this.name} age is ${this.age}`;
    }
}
let user1 = new User('bobo',20)
let user2 = new User('rose',20)
// console.log('user1', user1)
// console.log(user1.getInfo());

let userInfo = new Map();
userInfo.set(user1, {email:"user1@example.com",address:"ygn"});
userInfo.set(user2, {email:"user2@example.com",address:"bago"});
// Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references. This can be particularly useful for creating collections of items where duplicates are not allowed.

// Key Features of Set
// Unique Values: A Set automatically removes duplicate values. If you add a value that is already present in the Set, it will not be added again.

// Any Type of Value: A Set can store values of any type, whether primitive (like numbers, strings, or booleans) or objects and functions.

// Insertion Order: A Set maintains the order of elements as they were added. You can iterate over the elements in the order of their insertion.

// Built-in Methods:

// add(value): Adds a new element to the Set.
// has(value): Returns a boolean indicating whether an element is present in the Set.
// delete(value): Removes a specified element from the Set.
// clear(): Removes all elements from the Set.
// size: Returns the number of elements in the Set.
// keys(): Returns an iterator for the values (same as values).
// values(): Returns an iterator for the values.
// entries(): Returns an iterator for the [value, value] pairs (useful for compatibility with Map).
// forEach(callback): Iterates over each element, executing a provided callback function.

const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add('hi');
mySet.add({a: 1, b: 2});
mySet.add(5);
console.log(mySet.has(1));
console.log(mySet.has(3));
console.log(mySet.has('some text'));
console.log(mySet.size);
// Deleting an element
mySet.delete(5);
console.log(mySet.has(5));
// Iterating over the Set
mySet.forEach((value) => {
    console.log(value);
});
for (let value of mySet.values()) {
    console.log(value);
}
// Getting all entries
for (let entry of mySet.entries()) {
    console.log(entry);
}
// Clearing the Set
mySet.clear();
console.log(mySet.size); 