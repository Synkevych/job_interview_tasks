### typeof NaN
typeof NaN -> number of course 

### Number.MIN_VALUE > 0 // true !
Number.MIN_VALUE = 5e-324

### typeof null is object
typeof null ->  object
null instanceof Object -> false

### null == false -> false 

### "string" instanceof String -> false 
 you cannot apply instanceof to primitive values.
 Primitives are not objects and hence cannot be an instance of a constructor function.

 ### accidental global
 “y=1” creates an auto-global since there’s no binding “var” statement for it.
```js
(function(){
    var x = y = 1;
})();

x // undefined 
y // 1!
```

### [] == ![] // true

### Firebag absolutely won't let you create a variable called console 
```js
var console = {}; 
console.log(3 =="3"); // TypeError cannot read property 'log' of undefined 
```
### 3 == "03" -> true !

### You can write global variable using Object.prototype
```js
Object.prototype.foo = 10; 
    console.log(foo); // 10
```

###  1.7976931348623157e+308 === 1.7976931348623158e+308 // true 

### concat fun
 "222" - -"111" -> 333 // now fixed

 ### coerced -  number type coercion
 ```js 
a = 012 	// 10
```

### negative array index 

```js
/*
  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  arr[-1] = "yo wazzzup";
  // arr => [ 1, 2, 3, 4, 5, 6, 7, 8, '-2': 'yo wazzzup' ];
  */
  v
```

### [1, 2, 3] + [4, 5, 6] // "1,2,34,5,6"

 ### !!"false" == !!"true"
 Преобразование в булевый тип строки => true 

 ### If we compare 2 string it takes the first character's code
"01" == "1" // false 

### get date return the day of the month 
```js 
    var date = new Date('Tue Apr 01 2014');
    date            // Tue Apr 01 2014 00:00:00 GMT+0200
    date.getDate()  // 1 true day 
    date.getDay()   // 2 day of week 
    date.getMonth() // 3
```
### multiply one element 
```js 
console.log([4] + [4]); // "44"
console.log([4] - [4]); // 0 
console.log([4] * [4]); //16
console.log([4, 4] * [4, 4]); // NaN
