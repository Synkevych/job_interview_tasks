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
  
