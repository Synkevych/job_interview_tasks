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

console.log(changeA(a)); //=> {b:10}
console.log("a",a); 	// => {b:10}
console.log(changeA2(a)); // => {b:12}
console.log("a",a);		// => {b:10}
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
JS in mathematical operation converts the data into the simplest type for output.
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
Приоритет операций играет здесь ключевую роль, первая операция это присвоенние *foo.x* ссылки на *foo*, которая изменяется сразу на следующей операции. 
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
// v1 
function isThreePassed(){
 const args = Array.prototype.slice.call(arguments);
 return args.indexOf(3) !== -1; 		//  есть ли значение 3 в масиве ? если нет вернет -1 
}
// v3 
function isThreePassed(...args){
 return args.some(el => el === 3 ); // есть ли один елемент который имет значение 3   
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

### Don't use an arguments variable inside ()=>{}
- input: '*', '1', 'b', '1c'
- output: '1\*b \*1c'

```js
 //new & short way 
const getStr = (...args) => [].slice.call(args, 1).join(args[0]);
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
Минимальное время которое можно задать *setTimeout()* зависит от движка браузера
```js
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
Браузер автоматически определит размер ширины, если в родительском блоке задана **width**,
padding бедет равен половине этого значения. Тоесть это будет куб. 
https://codepen.io/sunkevu4/full/dybgvRg

### seven(plus(one())) => 8. five(minus(two())) => 3

Используется композиция функций
```js
const one = arg => 1 + (arg || 0);
const plus = (arg) => arg;
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

### What is the return ?
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

### вывести в консоль значение используя все известные способы
```js 
var obj = {x: 'bar'};git gtiii
function f() { console.log(this.x); }
// expected result "bar" 

f.call(obj, a, b);
f.apply(obj, [a, b]);

obj.funk = function f() { console.log(this.x); }
obj.funk();

function f() { console.log(this.x); }.bind(obj, a, b);
f();
```

### Преобразование типов в JS
**Оператор +** выполняется с лева на право и вызывает переобразование только в том случае если операнды разных типов
массив будет преобразован к строке 
```js 
15 + 3 + 'number' ==  'number'+ 15 + 3 // false
[] + null + 1 			// '' + null + 1
{}+[]+{}+[1]			// '0[object Object]1'
!+[]+[]+![]				// 'truefalse'
new Date(0) - 0			// => 0
new Date(0) + 0			// 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0'
```
**Оператор ==** вызывает численное приобразование, строки преобразовуются в NaN который не равен даже самому себе!!!
```js
0 == "0"				// 0 == 0  => false == false => true 
'true'== true 			// NaN == 1 => false 
null == ''				// null == 0 => false  
null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true
NaN === NaN 			// false 
NaN == NaN 				// false
!!"false" == !!"true"   // true == true => true 
if (value !== value) { console.log("we're dealing with NaN here") }
['x'] ==  'x'			// 'x' == 'x' => true 
[1,2,3] == [1,2,3]		//false
```

**Логические операторы || и &&** преобразовавают операнды к булевому значению но возващают всегда оригинальные значения
```js 
0 || "0" && {} 			// false || true => "0" && {} => {}  
```
### what the return  ? 

```js 
let a = 1;
let b = { toString() {return '1'} };
let c = 1;
// '111'
```
### Automatic sort inside object using for .. in 
```js 
for(let key in  {1:1, 0:0}) {
 alert(key);
}

// 2 
[] + false - null + true => "false"+ null => NaN => NaN

// Reference Error 
let f = function(x) {
  alert(x)
}

(function() {
  f(1)
}())
```

### what the length of array a? 
```js
var a = [] //a.length = 0
a[1] = 5 //a.length = 2
a[3] = 53 //a.length = 4
delete a[3] //a.length = 4; a[3] = undefined!
```

### Closure in JS
```js 
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
// 0, undefined

// раабочий вариант 1 
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // передадим функции переменную i, в результате
  // у каждой функции будет доступ к правильному значению индекса
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

// рабочий вариант 2

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // использование ключевого слова let, которое появилось в ES6,
  // позволяет создавать новую привязку при каждом вызове функции
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
```

### Поиск максимального числа в масиве
```js
let mass = [1,11,4,100,500,132,2];
let max = Math.max(...mass)
```

## Детруктуризация может использоваться для строк

```js
let str = "Hello world, I'm here";
let string_array = [...str];
```

## Замыкание не срабатывает через Function Declaration
Если определить переменную с таким же именем как у функции  
то определение функции удалит из памяти саму переменную,  
даже если она определена после *return*;

```js
let foo = 1;
function bar() {
	foo = 10;
	return;
	function foo() {}
}
bar();
console.log(foo);
```

## Another dirty example

```js 
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = 11;
}
alert(typeof bar()); //=> first undefined - then function 

/* another example
*  shows the closure when creating a new object
*/
var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

alert(go()); //3 this new instance we do not have another value - just code of function bar 
alert(foo.baz.bar()); // 1 the first x inside parent 

// v3 

var x   = 4,
    obj = {
        x: 3,
        bar: function() {
            var x = 2;
            setTimeout(function() {
                var x = 1;
                alert(this.x);
            }, 1000);
        }
    };
obj.bar(); //4 

//v4 

function bar() {
    this.x = 2;
    return x;
}
var foo = new bar();
alert(foo.x); // closure work here - 2 
```

## Array in JS can have method inside 
```js 
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length);
```

## We cant delete perent method like length
- and this method present inside the object
```js 
function foo(){}
delete foo.length;
alert(typeof foo.length); // "number"
```

```js 
var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x); //undefined
```
