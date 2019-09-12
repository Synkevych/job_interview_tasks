### How does JavaScript even work ? 
A single-threaded non-blocking asynchronous concurrent language 
Have a call stack and event loop. a callback queue some other apis and stuff
v8 have call stack and a heap[куча]

### 1. Принципиальная разница между var & let
```javascript
for(var i = 0; i < 10; i++){ // code }
console.log(i) // i = 10 

for(let i = 0; i < 10; i++){ // code }
console.log(i) // i = 10  // ReferenceError: i is not defined
```

Переменная объявленая через **let** видна только в рамках блока {...}.
Через **var** видна везде в функции. 
Это влияет на объявления внутри if, while, for;

Используя var можно переобъявить переменную, ошибки не будет.
```javascript 
var s = 10;
var s = 11; // s = 10
```
Используя let - SyntaxError 's' has already been declared

Переменная объявленая через var существуют до объявления.
console.log(a); // undefined 
var a = 0;

### 3. Как взять от 7.32 дробную часть?
Например на серевер нужно отправить число частями.
```javascript
let double = 7.32
	
// best
double.toString().split(".") // ["4", "234"]
	
// good
~~ double; 		// 7 двойное НЕ (~)
double ^ 0 		// 7 Исключающее ИЛИ (^) с нулём
double.toFixed()	// "7"
double.toPrecision(1)	// "7"
Math.round(double)
```
    
### 4. Как с помощью чистой функции добавить к state новый массив

```javascript
let arr = [1,2,3];
let newArr = [4,5];
const addEndOfMass = (state = {}, action ) => {
	return { Object.asing({}, arr, newArr)}
}
```
### 5. Найболее сложное задание? 

Правильно давать имена переменным и функциям. 

### 6. Почему console.log("string".length)  возвращает число ?
Вопрос связан с примитивными типами в JS(6 видов), они не имеют методов которые могли бы их изменить, поэтому они неизменяемые, их можно только переназначить. 
Автоупаковка(autoboxing) есть как у объектов так и у примитивных строк;
Когда вы пытаетесь вызвать свойство или метод для определенных примитивных типов(кроме undefined, null), JS
преобразует его во временный **объект-оболочку** и получит доступ к его свойству или методу, не затрагивая сам оригинал.
После выполнения нужной операции оболочка удаляется. 
```javascript
const foo = "bar";
foo.length; //3 
foo = "bar"; //true
```
В примере выше чтобы получить доступ к свойству length, JavaScript упаковывает foo в объект-оболочку,
получает доступ к свойству length объекта-оболочки, а после уничтожает его.
Это делается без изменения foo (foo по-прежнему является примитивной строкой).

```javascript 
const foo = 42;
foo.bar = "baz"; // присвоение на объекте оболочке
foo.baz;  //undefined 
```
Путаница также есть в таких функциях как String, Number, Boolean, Function и так далее, которые при вызове с new создают объекты-оболочки для соответствующих типов.
```javascript
	let str1 = new String("string"); 
	typeof str1; // object
	str1 === "string"; //false 
	let str2 = "string";
	typeof str1 //string
```

str.length — это числовое свойство не функция
Содержимое строки в JavaScript нельзя изменить. 
String имеет методы Методы toLowerCase() и toUpperCase()  str.trim() — убирает пробелы в начале и конце строки.
str.repeat(n)

- Строки, булевые значения и числа могут быть представлены в качестве примитивных типов и в качестве объектов
- Определенные примитивные типы (строки, булевые значения, числа) ведут себя как объекты благодаря наличию в JavaScript автоупаковки.
### 7. Как функция изменит переменные || Что вернет console.log(obj, num) 
```javascript
	let obj = { };
	let num;
	
	function changeItem(obj, num){
		obj.name = "Roman";
		num = 10;
	}
	changeItem(obj,num);
	console.log(obj, num) 	// { name: 'Roman' } undefined
```

Сдесь сработает замыкание, если функции не передавть аргументы функции и удалить параметры(obj, num) то она сработает так как и ожидалось 
```javascript
	let obj = { };
	let num;
	
	function changeItem(){
		obj.name = "Roman";
		num = 10;
	}
	 changeItem();
	console.log(obj, num)	// { name: 'Roman' } 10
```

### 8. Как поведет себя функция ?
Более подробно – [https://habr.com/ru/company/ruvds/blog/340194/]
Метод setTimeout() работет совсем подругому, попав в **stack** он не выполняеться а передается в **Web Apis** там ожидает завершения таймера и передается в **eventLoop or CallbackQueue** кототрый смотрит - **stack** is empty ? эсли да то передает ему результат выполененния

В этом примере он сначала выполнит всю роботу и передаст ссылку на результат в  **Web Apis -> Callback Queue** а затем после того как пройдет 100мс вернет в пустой **stack**.  При этом i изменится на 10 и результат всех вызовов будет 10. 

```javascript
	let i = 0;

	for (i; i < 10; i++) {
		setTimeout( () => 
		console.log(i), 100) 	// (10) 10
	}
	// нужно вывестис числа с 0-9
```

– – – – – – – – – – – – – – – – – – 
Поведение изменится если переместить определение let
внутри цикла, создает новую привязку при каждом вызове функции
```javascript
for (let i = 0; i < 10; i++) {
	setTimeout( () => 
	console.log(i), 100)
}
```

– – – – – – – – – – – – – – – – – – 
Цикл for создаёт новое лексическое окружение для каждой итерации. 
Можно создать переменную j и скопировать в нее i;
Примитивы копируются «по значению», поэтому мы получаем совершенно
независимую копию i, принадлежащую текущей итерации цикла.

```javascript
	for (var i =0; i < 10; i++) {
		let j = i;
		setTimeout(() => console.log(j), 100); // (10) 10
	}
```

– – – – – – – – – – – – – – – – – – 
Явно паредать параметр во внутреннюю функцию
```javascript
var i = 0;
for (i; i < 10; i++) {
	setTimeout(
		function(i) {
			return function() {
				console.log(i);
			};
		}(i),
		100 ); }
```

– – – – – – – – – – – – – – – – – – 
Похожая задача только с использованием массива 

```javascript
const arr = [10, 12, 15, 21];
for (const [i, item] of arr.entries()) {
    setTimeout(console.log, 0, `Index: ${i}, element: ${item}`);
}
```

### 9. Какую роль играют { } [Curly brackets or braces]
```javascript
let i = 10;
let b = {};
{ 
	i += 5;
	b.name = "Bohdan";
}
	console.log(i, b); //15 { name: 'Bohdan' }

```

Только декоративную, никак не влияют на код.
НО! Есть и такой сценарий: 
```javascript
{
 let name = "Roman";
}
console.log(name); // name is not defined
```

### 10. Что будет выведено в консоль ?

```javascript
console.log(4,30+2); 	// 4 32 использован оператор "," вместо "." 
console.log("4.30"+2);	// 4.302 будет преобразован в строку
console.log("4.30" -2); // 2.3
console.log("4.30" +2); // 4.302
```

 ### 11 Каррирование функций 	
Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).	

 ### 12 Наследование прототипное, объектное и функциональное 	
Прототипное Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]	
Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берет его из прототипа. В программировании такой механизм называется «прототипным наследованием».	

```javascript
 let animal = {	
  eats: true,	
  walk() {	
    /* этот метод не будет использоваться в rabbit */	
  }	
};	

 let rabbit = {	
  __proto__: animal	
};	

 rabbit.walk = function() {	
  alert("Rabbit! Bounce-bounce!");	
};	

 rabbit.walk(); // Rabbit! Bounce-bounce!	
```
### 14 Конструкция switch: 
```javascript
let a = 2 + 2;

switch (a) {
  case 3: // выполняется строгое сравнивание
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break; // прерывает выполнение кода дальше 
  case 5:
    alert( 'Перебор' );
    break;
  default: // необязательный блок в этом случае не выполнится
    alert( "Нет таких значений" );
}
```

### Деструктуризация ES2015

```javascript
let user = {
	fistName: "Roman",
	lastName: "Synkevych"
	}

let { firstName: name, lastName } = user;
name; // Roman, different variables name 
lasName; // Synkevych

function swap (a, b){
return [a, b] = [b, a];
swap(10, 5); // 5, 10
```

### 15 Использование класов взамен функциям 
```javascript
// old way 
function Student(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

Student.prototype.sayHello = function(){
	return "Hello" + this.firstName + ' ' + this.lastName;
}

function Student(){
	Person.apply(this, arguments);
	}

// ES2015
class Person {
	constructor(firstName, lastName){
		this.fistName = firstName;
		this.lastName = lastName;
	}

	sayHello(){
		return `Hello ${this.firstName} ${this.lastName}`;
		}

// Статический метод можно вызвать только по имени класса (невозможо по имени  объекта)
	static isStudent(obj){
		return obj.constructor === Student;
		}
}
``` 
### 16 Наследование || ES2015 Inheritance

```javascript 
class Student extends Person{
	constructor(firstName, lastName){
		super(firstName, lastName)
	}
} 
```

### 17 Конвертирование объекта в массив

```
let divs = document.getElementByTagName('div');

let converted = [].slice.call(divs);
let converted2 = Array.from(divs);
let converted3 = Object.assing( {}, divs); //  Maybe not a deep clone   

converted.reduce // function reduce() { ... }
```
converted.reduce // function reduce() { ... }

### 18 Глубокая копия массива 
```
let array = [1,2,3];

let arrayCopy = [...array]; 

// but !
arrayCopy[0] = '👻'; // change shallow element
arrayCopy[1][0] = '💩'; // change nested element
console.log(arrayCopy); // [ '👻', [ '💩' ], 3 ]

// ❌ Nested array got affected
console.log(nestedArray); // [ 1, [ '💩' ], 3 ]

// Deep Copy
let arrayCopy = JSON.parse(JSON.stringify(array)); 

// Shallow Copy
let arrayCopy = array.slice();

// Shallow Copy
let arrayCopy = array.map(a => Object.assign({}, a)
```
### 19 Anomalies of JavaScript
```javascript
0.1 + 0.2 === 0.3 //false
4- “- 4” === 8 //true
{ } + [ ] === 0 //true
let a = []; a == !a //true
NaN === NaN // false
```
### From string to number 
```javascript
parseInt('42.122px', 10); 	// retutn 42
parseFloat('42.122px') 	//42.122
Number('42.122') 	//42.122
Number('42.122px') 	//NaN
```
### From string to arrayy
"Hello JavaScript".split(''); ['H','e','l','l','o', ...];
"Hello JavaScript".split(' '); ['Hello', 'JavaScript'];

All string method:
 'quote', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
      'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
      'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase',
      'toLocaleUpperCase', 'localeCompare', 'match', 'search',
      'replace', 'split', 'substr', 'concat', 'slice'

## From number to string
(412341).toString().split('') //[ '4', '1', '2', '3', '4', '1' ]
(412341).toString()		// '412341'
(6).toString(2));       // return '110'

### Типы данных в json:
String, Number, Object, Array, Boolean, null;
 {
	"balance": "204."
}

JSONP - JSON with padding» (JSON с набивкой)
functionCall({"Name": "Foo", "Id": 1234, "Rank": 7});

