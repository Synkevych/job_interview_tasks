## Пропустить все null, undefined и несуществ. элементы в массиве
```js
if (!arr[і]) continue;

// Пропустить undefined + несуществ. эл. // тело цикла

if (a[і] === undefined) continue;

// Пропустить несуществующие элементы

if (!(i in a)) continue;
```

## Использование forEach
```js 
var data = [1, 2, 3, 4, 5];
// Этот массив требуется обойти var sumOfSquares =0;
// Требуется вычислить сумму квадратов элементов
data.forEach(function(x) {
  // Передать каждый элемент этой функции
  sumOfSquares += х * х; // =>55 : 1+4+9+16+25
});

// Functions
//In addition to the arguments,
// when calling any function, it is passed another value that defines the context of the call
//- the value in the *this* keyword.
```
// Calculate the factorial
function factorial(x) {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

let square = function(x) {
  return x * x;
};

// Nested Functions

function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}

//Functions in JavaScript can be called in four ways:
// - as functions
// - as methods
// - as constructors
// - indirectly, using their methods call() and apply()

## this
// this – is a keyword, not a variable or property name.
let o = {
  m: function() {
    let self = this;
    console.log(this === o); // => true, this - объект о
    f();
    function f() {
      console.log(this === o); // => false, this глобальный объкт или undefined
      console.log(self === o); // => true - self значение this внеш. ф-ции
    }
  }
};

// Вызов конструктотра, обозначает ключ. с.  new
let o = new Object; // === let o = new Object;

## undeclared, undefined, null 
```js 
const bar = foo + 1;
// error foo is not defined, but it also named - undeclared 
```

```js
let b; 
typeof b; // undefined 
b === undefined; //=> true
```

```js 
let n = null;
typeof n; //=> object
null == n; //=> true
null == undefined; //=> true

(null===null) // true
(null===undefined) // false

// The value null is the only falsy value with the typeof "object":
console.log(typeof null === "object" && !null) // true
console.log(typeof {} === "object" && !{}) // false

// This can be used to create a simple isNull() function:
const isNull = (value) => typeof value === "object" && !value
console.log(isNull(null)) // true
```
## Определение класса объекта с помощью конструктора 
```js 
function typeAndValue(x) { if (х == null) return // Значения null и undefined не имеют конструкт. 
  switch(x.constructor) { 
    case Number: return "Number: " + x; //Работает с простыми типами 
    case String: return "String: " + x + ; 
    case Date: return "Date: ” + x; // Со встроенными типами 
    case RegExp: return "Regexp: " + x; case Complex: return "Complex: + x; // И с пользовательскими типами 
   }
 }
