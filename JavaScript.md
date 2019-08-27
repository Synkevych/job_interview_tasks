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

### 2. Какие параметры есть в Promise
У объекта promise возвращаемого конструктором new Promise, есть внутренние свойства, к которым нет прямого доступа:
- **state** ("состояние") – вначале **"pending"**( ожидание ), потом меняется на **"fulfilled"** (выполнено успешно) при  вызове resolve или на **"rejected"** выполненео с ошибкой при вызове "reject"; 
- **result** ("результат") – вначале **undefined**, далее меняется на **value** при вызове resolve(value) или на error при вызове reject(error).
синтаксис: 
```javascript
let promise = new Promise(function(resolve, reject) {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve("done"), 1000);
});
```

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
	return { Object.asing({}, ...state, newArr)}
}
```
### 5. Найболее сложное задание? 

Правильно давать имена переменным и функциям. 

### 6. Почему console.log("string".length)  возвращает число ?
Разница между  
```javascript
	let str1 = new String("string"); // typeof str1 === object
	// &
	let str2 = "string"; // typeof str1 === string
```

str.length — это числовое свойство не функция
Содержимое строки в JavaScript нельзя изменить. 
String и**меет методы Методы toLowerCase() и toUpperCase()  str.trim() — убирает пробелы в начале и конце строки.
str.repeat(n)

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
```javascript
	let i = 0;

	for (i; i < 10; i++) {
		setTimeout( () => 
		console.log(i), 100) 	// (10) 10
	}
	// нужно вывестис числа с 0-9
```

– – – – – – – – – – – – – – – – – – 
Поведение изменится если переместить определение let внутри цикла, создает новую привязку при каждом вызове функции
```javascript
for (let i = 0; i < 10; i++) {
	setTimeout( () => 
	console.log(i), 100)
}
```

– – – – – – – – – – – – – – – – – – 
Цикл for создаёт новое лексическое окружение для каждой итерации. Можно создать переменную j и скопировать в нее i;
Примитивы копируются «по значению», поэтому мы получаем совершенно независимую копию i, принадлежащую текущей итерации цикла.

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
let b = {}:
	{ i += 5;
	  b.name = "Bohdan";
	}
	console.log(i, b)
```
Только декоративную, никак не влияют на код

### 10. Что будет выведено в консоль ? 
```javascript
console.log(4,30+2); 	// 4 32 использован оператор "," вместо "." 
console.log("4.30"+2);	// 4.302 будет преобразован в строку
console.log("4.30" -2); // 2.3
console.log("4.30" +2); // 4.302
```
### 11 Какие методы есть в Promis	
В классе Promise есть **5 статических методов**.	

- Promise.all(promises) – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы Promise.all будет эта ошибка, результаты остальных промисов будут игнорироваться.	
- Promise.allSettled(promises) (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:	
state: "fulfilled", если выполнен успешно или "rejected", если ошибка,	
value – результат, если успешно или reason – ошибка, если нет.	
- Promise.race(promises) – ожидает первый выполненный промис, который становится его результатом, остальные игнорируются.	
- Promise.resolve(value) – возвращает успешно выполнившийся промис с результатом value.	
- Promise.reject(error) – возвращает промис с ошибкой error.

К Promise можно добавить функции-потребители: **then**, **catch**, **finally**
- Первый аргумент метода **.then** – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат. Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.

```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
  result => alert(result), // выведет "done!" через одну секунду
  error => alert(error) // не будет запущена
);
```
- **catch** Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента: .then(null, errorHandlingFunction). Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое:
```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибка!")), 1000);
});
// .catch(f) это тоже самое promise.then(null, f)
promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду
```
- Вызов **.finally(f)** похож на **.then(f, f)**, в том смысле, что f выполнится в любом случае, когда промис завершится: успешно или с ошибкой. Хорошо подходит для очистки, например остановки индикатора загрузки.

```javascript 
new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000)
})
  .finally(() => alert("Промис завершён"))
  .then(result => alert(result)); // <-- .then обработает результат
```

```javascript 
 Promise.all([	
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),	
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),	
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))	
]).catch(alert); // Error: Ошибка!	
// Проверка промиса выполняется только на ошибку, сработает только ошибка независимо от других результатов
 
 let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));	

 Promise.all(requests)	
  .then(responses => {	
    // все промисы успешно завершены	
    for(let response of responses) {	
      alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки	
    }	

     return responses;	
  })	
  // преобразовать массив ответов response в response.json(),	
  // чтобы прочитать содержимое каждого	
  .then(responses => Promise.all(responses.map(r => r.json())))	
  // все JSON-ответы обработаны, users - массив с результатами	
  .then(users => users.forEach(user => alert(user.name)));	
```

 ### 12 Каррирование функций 	
Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).	

 ### 13 Наследование прототипное, обектное и функциональное 	
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
### Конструкция switch: 
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
  default: // необязательный блок 
    alert( "Нет таких значений" );
}
````
