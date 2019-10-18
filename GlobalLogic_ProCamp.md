### 1 Show duplicate elements in an array
Input: [1,2,3,7], [4,2,3,9]; [2,3,5,1,12,4], [8,1,4,2,3]
Output: [2,3]; [2,3,1]
```javascript

let arr = [1,2,3,7],
	arr2 = [4,2,3,9];
// v1 
let newArr = arr.concat(arr2);

let res = newArr.filter(function(value, index, self) {
  return self.indexOf(value) !== index;
  // перевіряємо не сам елемент а його позицію в масиві
  // indexOf повертає позицію елемента
  // ми порівюємо її з індексом який == позиції пот. елемента
});
// v2 

let res = [...arr, ...arr2].reduce(function(acc, el, i, arr) {
	// проверяем есть елемент раньше текущего елемента?
	if (arr.indexOf(el) !== i 
	// данный елемент уже записан в акумулятор ?
	&& acc.indexOf(el) < 0) acc.push(el); 
	return acc;	// [2, 3]
}, []);

```
### 2 Create new object using method reduce
Input: [{a:1}, {a:2}, {a:3}]
Output: {a:1, index:0}, {a:2, idex:1}

```javascript
[{ a: 1 }, { a: 2 }, { a: 3 }].reduce(function(acc, el, i, arr) {
	if (el.a !== 3) acc.push({...el, i});
	return acc;
}, []);
// [ { a: 1, i: 0 }, { a: 2, i: 1 } ]
```
### Return an object that contains the number of times each string occured in the array
 function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
 }
### Find index of first different from the others element
```jsx 
//v1
function iqTest(numbers) {
	let newNum = numbers.split(' ');
	let filtered = newNum.filter((elem, i, arr) => elem % 2 === 0);
	res = 0;
	if (filtered.length > 1) {
		res = [...newNum].reduce(function(acc, el, i, arr) {
			if (el !== filtered[i] && acc === null) acc = i;
			return acc;
		}, null);
	} else {
		res = newNum.indexOf(String(filtered[0]));
	}
	return res + 1;
}
console.log('two', iqTest('43 28 1 91')); // 2
//v2 

function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;
  
  return nums.indexOf(target) + 1;
}
//v3
const iqTest = test => {
  const numbers = test.split(" ");
  const evens = numbers.filter(el => el%2 );
  const odds = numbers.filter(el => !(el%2));
  const differ = evens.length == 1 ? evens[0] : odds[0]
  
  return numbers.indexOf(differ) + 1
}
```
### Count all duplicate in array and return new array 
Input: '1, 2, 2, 3, 3, 3, 4, 4, 4, 4'
Outpu: [ '1', [ '2', 2 ], [ '3', 3 ], [ '4', 4 ] ]

```jsx
// v1
function compress(a) {
    const array = a.split(', ');
    let comp = [];
    for (let i = 0; i < array.length; i++) {
        let count = 1,
            elem = array[i];
        while (array[i] === array[i + 1]) {
            i++; count++;
        }
	comp.push(count > 1 ? [Number(elem), count] : Number(elem));
    }
    return comp;
}

// v2
function compress(a) {
	const array = a.split(", ")
	const n = array.length;
	if (n == 0) return [];
	const cs = [];
	let i = 0;
	while (i < n) {
		const x = array[i];
		let c = 1;
		while (++i < n && array[i] === x) ++c;
		cs.push(c > 1 ? [Number(x), c] : Number(x));
	}
	return cs;
}
```
### 3 Блочные и строчные элементы
Строчные элементы могут содержать только данные и другие строчные элементы.
Строчными елементами являются:
```html
<a>, <area>,
<b>, <bdo>, <bdi>,
<cite>, <code>,
<dfn>, <del>,
<em>,
<i>, <iframe>, <img>, <ins>,
<kbd>,
<label>,
<map>, <mark>,
<s>, <samp>, <small>, <span>, <strong>, <sub>, <sup>,
<time>,
<q>,
<ruby>,
<u>,
<var>
```
	
Все остальные блочные.

### 4 Using bash open file and remove duplicats 
### 5 Using bash create file and send a log to it
### 6 What is HTTP ? 
We have http & ftp protocol 
http – stands for Hyper Text Transfer Protocol

WWW is about communication between web clients and servers

Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses.

Communication between clients and servers is done by requests and responses:
### 7 Run full deleting in PostgreSQL
VACUUM FULL - используется для польной очистки базы данных 

### 8 center a block inside another block
––––––
| [] |
______
(Example)[https://codepen.io/sunkevu4/pen/jONxjNP]
```css
/* 1  */
.child{
  position: absolute;
  float: left;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;

/* 2 */
         position:absolute; 
  /* or fixed */
  left:0; right:0;
  top:0; bottom:0;
  margin:auto;
  max-width:100%;
  max-height:100%;
	overflow:auto;
/* v3 */

  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
```

### 9 CSS after and before tag

### 10 Sorting and finding methonn in JavaScript 
filter
find(fn) // find only one element!!
findIndex(fn)
sort
every 
includes
forEach()
indexOf

### 11 JavaScript Closures
JavaScript variables can belong to the **local**, **global** or **block {}** scope.

### 12 Git fetch command
git-fetch - Download objects and refs from another repository
(для получения данных из удалённых проектов, те которые мы неможем изменить, их можно тоже добавить в remote)

### 13 REST-API 
это общие принципы организации взаимодействия приложения/сайта с сервером посредством протокола HTTP. Особенность REST в том, что сервер не запоминает состояние пользователя между запросами - в каждом запросе передаётся информация, идентифицирующая пользователя (например, token, полученный через OAuth-авторизацию) и все параметры, необходимые для выполнения операции.

Всё взаимодействие с сервером сводится к 4 операциям (4 - это необходимый и достаточный минимум, в конкретной реализации типов операций может быть больше):
1. получение данных с сервера (обычно в формате JSON, или XML)
2. добавление новых данных на сервер
3. модификация существующих данных на сервере
4. удаление данных на сервере

Операция получения данных не может приводить к изменению состояния сервера.

Для каждого типа операции используется свой метод HTTP-запроса:
1. получение - GET
2. добавление - POST
3. модификация - PUT
4. удаление - DELETE

### OOP : Encapsulation, Inheritanc, Polymorphism
Числа, строки, логические переменные (true и false), а также значения null и undefined в JavaScript относятся к простым типам данных. Всё остальное — объекты. Числа, строки и логические переменные похожи на объекты тем, что имеют методы, но в отличие от объектов они неизменны. Объекты в JavaScript имеют изменяемые ключевые коллекции. В JavaScript объектами являются массивы, функции, регулярные выражения, и, конечно, объекты также являются объектами.
 Литерал — один из способов создания объекта. Также мы можем использовать фабричные функции или Object.create() для создания такого же массива:
```jsx
// Литерал
[1,2,3,4,5]

// Фабричная функция
Array(1,2,3,4,5)

```
**Наследование**
Наследование способствует повторному использованию кода, но зачастую приходится брать больше, чем нужно.
- Проблема в том, что если вы наследуете реализацию суперкласса, а затем меняете её, то эти изменения отзываются эхом во всей иерархии классов. В конечном итоге это может повлиять на все подклассы.

**Инкапсуляция**
Инкапсуляция защищает от влияния извне внутренние переменные каждого объекта. В идеале программа должна состоять из «островов объектов»: каждый из них со своими состояниями, передающий сообщения туда и обратно. Звучит как хорошая идея в том случае, если вы создаёте идеально распределённую систему, но на практике разработка такой программы сложна и вгоняет в определённые рамки.

**Абстракция**
Совокупность комплексных наследований, методов и свойств объекта должны адекватно отражать модель реальности.

**Прототипное программирование**
Прототипное программирование — это модель ООП которая не использует классы, а вместо этого сначала выполняет поведение класса и затем использует его повторно (эквивалент наследования в языках на базе классов), декорируя (или расширяя) существующие объекты прототипы. (Также называемое бесклассовое, прототипно-ориентированное, или экземплярно-ориентированное программирование.)

**Композиция**
Как упоминалось ранее, существует нечто гораздо более простое, чем классы/прототипы — функциональная композиция. Её легко можно использовать снова, она инкапсулирует внутренние состояния, выполняет операции на любом типе данных и может быть полиморфной.

JavaScript позволяет легко объединить связанные функции и данные в объекте:
```jsx
const Person = {
  firstName: 'firstName',
  lastName: 'lastName',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

//Создадим объект User, склонировав объект Person, и добавим туда дополнительные данные и функции:

const User = Object.create(Person)
User.email = ''
User.password = ''
User.getEmail = function() {
  return this.email
}

//Object.create() используется для копирования объекта, иначе он изменил бы существующий 
```
### bind(), apply(), call()

**Bind()**  используем для выставления значения this в методах и для каррирования функций(привязки к this в момент вызова функции или метода.).
```jsx
	this.handleClick = this.handleClick.bind(this);
	this.handleClick(card.id)
```
// Сортировка масива и удаление дубликатов 

```js
let arr = [1,2, 2, 3, 3, 3, 6, 4, 4, 4, 4, 10];

// 1
function compress(arr){
  let counter = 1;
	let newArr = [];
	array.forEach((element, i, arr) => {
		if (arr.length == 1) {
			newArr.push(element);
		} else if (i == 0 && element != arr[i+1]){
			newArr.push(element);
		}
		 else if (arr[i + 1] !== element && counter > 1) {
			newArr.push([element, counter]);
			counter = 1;
		} else if ((element !== arr[i + 1] && counter == 1)) {
			newArr.push(element);
		} else {
			counter += 1;
		}
	});
  return newArr;
}
// [ 1, [ 2, 2 ], [ 3, 3 ], 6, [ 4, 4 ], 10 ]

// 2
function compress(array) {

var r = [],
		l = array[0],
		c = 1;
	for (let v of array.slice(1)) {
		if (v === l) c++;
		else {
			
			r.push(c === 1 ? l : [l, c]);
			(l = v), (c = 1);
		}
	}
	r.push(c === 1 ? l : [l, c]);
	return r;
}

// 2

  let comp = [];
    for (let i = 0; i < array.length; i++) {
        let count = 1,
            elem = array[i];
        while (array[i] === array[i + 1]) {
            i++; count++;
        }
        comp.push(count > 1 ? [elem, count] : elem)
    }
    return comp;
```
