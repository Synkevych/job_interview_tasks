###  Closure inside functions using primitives and object
```js
var a = { b: 3 };

// we not pas value we pass link to object
function changeA(o) {
	o.b = 10; // we change a object 
	return o;
}

function changeA2(o) {
	o = { b: 12 }; // we change link to value inside
	return o;
}

console.log(changeA(a));
console.log("a",a);
console.log(changeA2(a));
console.log("a",a);
```

### closure 

```js
var a = 10;

// v1 
function changeA() {
	console.log( a ); // undefined 
	console.log(getStr()); // byy 

	var a = 5; // not change global a
	function getStr(){
		return "byy";
	}
}
changeA()
console.log( a ); //10, not changed 

//v2 if pased parameter 

function changeA(o) {
	console.log("o", o); //10 we get value from globa variable
	var o = 5; // change this variable 
}

changeA(a);
console.log(a);

// v3 with let 

function changeA(o) {
	console.log("o", o); //10 we get value from globa variable
	let o = 5; // SyntaxError: Identifier 'o' has already been declared 
}

changeA(a);
console.log(a);

```

### Type changing

```js 
// just concatenate operators !!! 
console.log(1+"2"+"3");

// at the 2 element change type to Number 1+2 = 3 + "3"
console.log(1+ +"2"+"3");

// all type convert to string !!! 
console.log(1+"2"+3);

console.log({a:1} && {b:2}); // { b:2 }

console.log({a:1} || {b:2}) // not true !!! - {a: 1}
//alway first element 

// ++"a" = NaN + "a"
console.log(("b" + "a" + + "a"+"a").toLowerCase()); 
```

### Write the function to do this add(2)(3) // 5

```js

// v1 

const add = (a) => {
	let sum = a;
	const func =(b) => {
		if(b) {
			sum+=b;
			return func;
		} else {
			return sum;
		}
	}
	return func;
}

console.log( add(2)(5)(65)() ); // 72

// v2 

function add(x){
	return function(y){
		return x + y;
	};
}

console.log( add(2)(5) ); // 7

// v3 with 3 element

function add(x){
  return function(y){
    return function(z){
       return x+y+z; 
     };
  };
}

console.log( add(2)(5)(4) ); // 11
```
### Expected result 
```js 
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

// foo - {n :2}
// bar - {n: 1, x: {n: 2} }
// foo.x - undefined 
// при выводе foo.x наше foo ссылается на его новое значение, в котором отсутствует x , то соответственно foo.x будет не определенно — undefined .

```

### Explain the result of console 
```js
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123; // key [b] will be converted to [object Object]
a[c]=456; // key [c] the same thing 

console.log(a[b]); //456
```

### if there in array any argument of 3 ? 
```js
function isThreePassed(){
 const args = Array.prototype.slice.call(arguments);
 return args.indexOf(3) != -1;
}

isThreePassed(1,2) //false
isThreePassed(9,3,4,9) //true
```

### css set div element in one line 
```css 
div{
	display: inline-block;
}
.wraper {
	display: flex;
}
div{
	float: left;
}
```

### setTimeout in JS, how work 
```js

console.log(1);
setTimeout( function(){  console.log("2")},100 ); // last
setTimeout( function(){console.log("3")},1 ); // in chrome api 1ms = 0
setTimeout( function(){ console.log("4")},0 );
setTimeout( function(){ console.log("5")},0 );
console.log(6);

// 1, 6, 3, 4, 5, 2
```
