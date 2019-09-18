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
console.log(("b" + "a" + + "a"+"a").toLowerCase()); // banana
```

### Каррирование функций(карринг): Write the function to do this add(2)(3) // 5

**Auto-caried** Curring takes a function which receives multiple arguments and returns it into a series of **higher-order function**, each receiving a single arguments.
Каррирование или карринг в функциональном программировании – это преобразование функциии с множеством аргументов в набор вложеных функций с одним аргументм.


```js
//  Auto
const multiply = a => b => c => a * b * c;
multiply(1)(2)(3); //6

// the same way but different writing 

const mul1 = multiply(1);
const mul2 = mul1(2);
const result = mul2(3);
log(result); // 6

// вариант функции для вычисления объёма 

const volume = l => (w, h) => l * w * h;
volume(70)(90,30);
volume(70)(390,320);
volume(70)(940,340);

// вариант функции расчета прямоугольных параллепипедов, одна из сторон которых зафиксирована
function volume(l,h,w) {
    return l * h * w
}
const hV = partial(volume,100);

hV(200,900); // 18000000
hV(70,60); // 420000

```

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
### Композиция функции - вложеная функиция одна в другую
Композиция это техника, позволяющая вам взять две и более простых функций и объединить их в одну, более сложную функцию.
**func1(func2(arg)))**

```js 
function addOne(x) {
  return x + 1;
}
function timesTwo(x) {
  return x * 2;
}
console.log(addOne(timesTwo(3))); //7
console.log(timesTwo(addOne(3))); //8
```

### Expected result 
```js 
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

// foo - {n :2}
// bar - {n: 1, x: {n: 2} }
// foo.x - undefined 
// при выводе foo.x наше foo ссылается на его новое значение, в котором отсутствует x, то соответственно foo.x будет не определенно — undefined.
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
### добавление прототипа в Number (2).plus(3).minus(1)
```js 
Number.prototype.plus = function (value) {
	return this + value;
}
// Number.prototype.plus = (a) => this+b; работать не будет у него нет доступа к this!
```

### Use arguments inside arrow functions, do not use arguments inside
- input: '*', '1', 'b', '1c'
- outpu: '1*b*1c'

```js
 //new & short way 
const getStr = (joiner, ...rest) => [].slice.call(arguments, 1).join(arguments[0]);
getStr( '*', '1', 'b', '1c' ) // '1*b*1c'

// better 
const getStr = (joiner, ...rest) => rest.join(joiner)

//old way
function getStr() {
	return [].slice.call(arguments, 1).join(arguments[0])
}
```
### Recursion to sum the value inside object tree
```js 
var sum = 0;

function getSum(obj) {
	sum += obj.valueNode;
	if (obj.next != null) {
		for (var i = 0; i < obj.next.length; i++) {
			getSum(obj.next[i]);
		}
	}

	return sum;
}
var tree1 = { valueNode: 1, next: [ { valueNode: 3, next: null	}, ... ] }

console.log(getSum(tree1)); //sum =3 
```
### JavaScript Async 
Минимальное время которое можно задать зависит от движка браузера
```
console.log(1);
setTimeout(function() {
	console.log(2);
}, 0)	// даже если указанн 0, они помещаются в конец вызова 
console.log(3);

// 1
// 3
// undefined from chrome!!
// 2 
```
### Есть div, в нем другой div, у второго задан padding 50%, как это все будет выглядеть?
Браузер автоматически определит размер ширины, если в родительском блоке есть задана **width**,
padding бедет равен половине этого значения. Тоэстьт эот будет куб. 
https://codepen.io/sunkevu4/full/dybgvRg

### seven(plus(one())) -> 8. five(minus(two())) -> 3

Используется композиция функций 
```js
const one = arg => 1 + (arg || 0);
const plus = (arg) => arg
const seven = arg => 7 + arg; 
```
### Напишите код, который при клике на любой div внутри root будет выводить в консоль его id.
```js
$('#root').on('click', function (event) {
    event.stopPropogation();
    console.log($(event.target).attr('id'));
})
```
### Object from array 
```js
var arr = [
 {name: 'width', value: 10}, 
 {name: 'height', value: 20}
]
//Output: {width: 10, height: 20}
const res = arr => {
let obj = {};
	arr.forEach(function(el) {
		obj[el.name] = el.value;
	});
	return obj;
}
```

### what the return ?
```js
var i = 10;
var array = [];

while (i--) {
	(function(i) {
		var i = i;
		array.push(function() {
			return i + i;
		});
	})(i);
}

console.log([array[0](), array[1]()]);
// [18, 16]
```
