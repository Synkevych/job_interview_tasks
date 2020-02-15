## find – return value found or undefined if not found 

1. findIndex - return index of found value or -1

2. includes – return a boolean if a value is in a string 

3. Number.isFinite handling NaN

4. Object.assign create copies of objects without the same reference !!Not a deep clone

5. The ES6 function *Object.is()*
```js 
let maybeNull = null;
// The following is equivalent to maybeNull == null or maybeNull == undefined:

console.log(Object.is(maybeNull,undefined) || Object.is(maybeNull,null)) // true
```

6.  Array.from – convert other data types into array if posible
```js 
let firstSet = new Set([1,2,3,45,12,3,4,1,,1,2,]);
let arrayFromSet = Array.from(firstSet);
```

### Promise.all 

### Maps – method: set, delete, size, keys(), values()
Don't have Object.prototype 
Iterating over keys and values in a map is quite easy
Similar to objects, exepts the keys can  be ANY data type!

### Sets - all values in a set are unique 
Methods: add, has, delete, size 


### Function.prototype.method
Using to add new method to function 

### Class Methods 
static availible using .
```js
class User{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' ');
    }

    get fullName() {
    return `${this.firstName} ${this.lastName}`;
    }

  static createGuest(){
    return new User("Guest", "Site")
  }
}
```

### REST and Spred
let student = {first: "Roman", last:"Synkevych", age: 20, }

**REST** - gathered remaining of keys and values in an object
Used before **=**
```js
let { first, last ...data } = student; 
```

**Spread** our keys and values from one obj to another 
Used after **=**
```js
let student2 = {...student, first:"Bohdsn", last:"Masluk"}; ```

### Async Await functions

```js
async function getUser(user){
  try{
    let responsePromise =  $.getJSON('url');
    let responseData = await responsePromise;
    console.log(responseData.name);
  } catch(error){
    console.log("User does not exist!");
  }


}
```
```javascript
function copyObject( obj ) {
  return Object.assing( {}, obj); 
  // new object, deep copy 
 }
 
 function checkIfFenite(num) {
  return Number.isFinite( num ); 
  // true || false 
 }
 
function areAllNumbersFinite(arr) {
  return arr.every( Number.isFinite );
 }
 
 function convertArrayLikeObject(obj) {
  return Array.from(obj);
 }
 
 function displayEvenArguments() {
  return Array.from(arguments).filter( val => val % 2 === 0 );
  }
  
  var nums = [1, 2, 3, 4, 5];
  nums.includes(3); // true
  
  async function getUser() {
    try{
      let urls = "localhost";
      let results = await Promise.all(urls){ ... }; 
      } catch(e){
        console.log('error:', e);
  }
  first(); // return a promise
  
  first().then( val => console.log(val));
  
  ```
  
