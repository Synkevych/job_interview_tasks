# Atlas interview

## Position - Junior Web Developer

### How does JavaScript even work?

A single-threaded, non-blocking, asynchronous, concurrent language, 
have a call stack and event loop, callback queue some other apis and stuff.

>**class:** создание нового класса/модели.  
>**method:** функция внутри класса.  
>**constructor:** метод, который инициирует объект при создании экземпляра класса.  
>**extends:** используется для определения наследования.  
>**super:** метод, который устанавливает свойства наследования за счет вызова родительского конструктора. Метод super должен стоять первой строкой в методе constructor.  
>**get:** возвращает значение.  
>**set:** переопределяет новое существующее значение.  
>**new:** создание объекта через метод конструктора класса.  

### Преобразование типов для примитивов

в if идет преобразование к логическому типу
при сравнении "==" к численому преобразованию

```js
//to false:
!!undefined,
!!null,
0, NaN, "",

//to true:
[], {}, 1, " ", "0"
```

### 1. Принципиальная разница между var & let

```javascript
for(var i = 0; i < 10; i++){ // code }
console.log(i) // i = 10

for(let i = 0; i < 10; i++){ // code }
console.log(i) // i = 10  // ReferenceError: i is not defined
```

- Переменная объявленая через **let** видна только в рамках блока {...}.
- Через **var** видна везде в функции. Это влияет на объявления внутри if, while, for;(но НЕ работает внутри функции)
- Используя var можно переобъявить переменную, ошибки не будет.
- Переменная объявленая через var существуют до объявления с значением *undefined*.
- А также оптимизация и другие полезные вещи.

```javascript
console.log(s); // undefined
console.log(i); // ReferenceError: bar is not defined
var s = 0;
var s = 1; // s = 1
let i = 5;
let i = 0; // получим ошибку: SyntaxError 's' has already been declared
```

### 3. Как взять от 7.32 дробную часть?

Например, на серевер нужно отправить число частями.

```javascript
let double = 7.32;

// best
(double + "").split(".");
```

### 4. Как с помощью чистой функции добавить к state новый массив

```javascript
let state = { "foo": 0};
let newArr = { "bar": 1};

const newState = (() => Object.assign({}, state, newArr))();
```

### 5. Найболее сложное задание?

Вопрос с подвогом который показывает что вы из себя представляете.  
Вариант ответа: Правильно давать имена переменным и функциям.  

### 6. Почему console.log("string".length)  возвращает число, ведь срока это примитив(базовый тип), а мы вызываем его метод?

Вопрос связан с примитивными типами в JS(6 видов), они не имеют методов которые могли бы их изменить, поэтому они неизменяемые, их можно только переназначить.  
**Автоупаковка(autoboxing)** есть как у объектов так и у примитивных строк;
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
    let str1 = new String("string"); // String {"string"}
    typeof str1; // object
    str1 === "string"; //false
    let str2 = "string";
    typeof str1 //string
```

str.length — это числовое свойство не функция/метод.  
Содержимое строк и чисел в JavaScript нельзя изменить, только переприсвоить.  
Функция – **String** имеет множество методов Методы toLowerCase() и toUpperCase()  str.trim() — убирает пробелы в начале и конце строки.  
str.repeat(n)

- Строки, булевые значения и числа могут быть представлены как примитивные типы или в качестве объектов.
- Определенные примитивные типы (строки, булевые значения, числа, символы) ведут себя как объекты благодаря наличию в JavaScript автоупаковки.

### 7. Как функция изменит переменные || Что вернет console.log(obj, num)

```javascript
    let obj = { };
    let num;

    function changeItem(obj, num){  // в obj - не значение а ссылка, в num мы передаем значение переменной. 
        obj.name = "Roman";
        num = 10;
    }
    changeItem(obj,num);
    console.log(obj, num)  // { name: 'Roman' } undefined
```

Сдесь сработает замыкание, если функции не передавть аргументы и удалить параметры(obj, num) то она сработает так как и ожидалось.

```javascript
    let obj = { };
    let num;
    
    function changeItem(){
        obj.name = "Roman";
        num = 10;
    }
    changeItem();
    console.log(obj, num)  // { name: 'Roman' } 10
```

### 8. Как поведет себя функция? Задача на понимание замыкания и области видимости.

Более подробно – [https://habr.com/ru/company/ruvds/blog/340194/]
Метод setTimeout() работет совсем подругому, попав в **stack** он не выполняеться а передается в **Web Apis** там ожидает завершения таймера и передается в **eventLoop or CallbackQueue** кототрый смотрит - **stack** is empty ? эсли да то передает ему результат выполененния.

В этом примере он сначала выполнит всю роботу и передаст ссылку на результат в  **Web Apis -> Callback Queue** а затем после того как пройдет 100мс вернет результат в пустой **stack (стек или кучу)**.  При этом **i** изменится на 10 и результат всех вызовов будет 10. 

```javascript
  let i = 0;
  for (i; i < 10; i++) {
    setTimeout( () =>
      console.log(i), 100)  // (10) 10
  }  // нужно вывестис числа с 0-9
```
  
Поведение изменится если переместить определение let
внутри цикла, создает новую привязку при каждом вызове функции

```javascript
for (let i = 0; i < 10; i++) {
  setTimeout( () =>
  console.log(i), 100)
}
```

Цикл **for** создаёт новое лексическое окружение для каждой итерации.  
Можно создать переменную j и скопировать в нее i;  
Примитивы копируются «по значению», поэтому мы получаем совершенно независимую копию i, принадлежащую текущей итерации цикла.

```javascript
for (var i =0; i < 10; i++) {
  let j = i;
        setTimeout(() => console.log(j), 100); // (10) 10
    }
```

--- 
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

---  
Похожая задача только с использованием массива 

```javascript
const arr = [10, 12, 15, 21];
for (const [i, item] of arr.entries()) {
    setTimeout(console.log, 0, `Index: ${i}, element: ${item}`);
}
```

### 9. Какую роль играют { } [Curly brackets or braces]
В ES6 это 3 тип замыкания – блочное, работает с let, const 

```javascript
let i = 10;
let b = {};
{ // сработает хостинг
    i += 5;
    b.name = "Bohdan";
}
    console.log(i, b); //15 { name: 'Bohdan' }
```
Только декоративную, никак не влияют на код в старой версии < **ES6**.
НО! Есть и такой сценарий: 
```js
{ 
 let userName = "Roman";
}
console.log(userName); // name is not defined
```

### 10. Что будет выведено в консоль? Понимание преобразования типов.

```javascript
console.log(4,30+2);    // 4 32 использован оператор "," вместо "." 
console.log("4.30"+2);  // 4.302 будет преобразован в строку
console.log("4.30" -2); // 2.3
console.log("4.30" +2); // 4.302
```

### 11 Каррирование функций

Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы последовательно **f(a)(b)(c)** не одним массивом **f(a, b, c)**.

const f = (a) => (b) => (c) => a + b + c;

### 12 3 типа наследование: прототипное, объектное и функциональное

**Прототипное**
В JavaScript объекты имеют специальное скрытое свойство [[Prototype]] (так оно названо в спецификации), которое либо равно null, либо ссылается на другой объект. Этот объект называется «прототип».

Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
Обратите внимание, что __proto__ — не то же самое, что [[Prototype]]. Это геттер/сеттер для него.

Он существует по историческим причинам, в современном языке его заменяют функции Object.getPrototypeOf/Object.setPrototypeOf, которые также получают/устанавливают прототип.

Когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берет его из прототипа. В программировании такой механизм называется «прототипным наследованием». Поиск свойства может ити безконечно если у нас бесконечный список наследований.

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

**Функциональное** или функциоальный патерн програмирования
Создается родительская функция с конструкотром в котором могут быть приватные (private), публичные (public) и защищённые (protected) свойства.

```javascript
function Machine(params) {
  // локальные переменные и функции доступны только внутри Machine
  var privateProperty;

  // публичные доступны снаружи
  this.publicProperty = ...;

  // защищённые доступны внутри Machine и для потомков
  // мы договариваемся не трогать их снаружи
  this._protectedProperty = ...
}

var machine = new Machine(...)
machine.public();
```

Вызвать конструктор потомка в своём контексте через apply

```js 
function CoffeeMachine(params) {
  // универсальный вызов с передачей любых аргументов
  Machine.apply(this, arguments);

  this.coffeePublicProperty = ...
}

var coffeeMachine = new CoffeeMachine(...);
coffeeMachine.publicProperty();
coffeeMachine.coffeePublicProperty();
```

Теперь в CoffeeMachine свойства, полученные от родителя, можно перезаписать своими. Но обычно требуется не заменить, а расширить метод родителя.

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

### Деструктуризация ES2015 и оператор Rest

```javascript
let user = {
    firstName: "Roman",
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

```js
let divs = document.getElementByTagName('div');

let converted = [].slice.call(divs);
// v1
let converted2 = Array.from(divs);
// v2
let converted3 = Object.assing( {}, divs); //  Maybe not a deep clone

converted.reduce // function reduce() { ... }
```

### 18 Глубокая копия массива

```js
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
parseInt('42.122px', 10);   // retutn 42
parseFloat('42.122px')      //42.122
Number('42.122')            //42.122
Number('42.122px')          //NaN
```

### From string to arrayy

"Hello JavaScript".split(''); ['H','e','l','l','o', ...];
"Hello JavaScript".split(' '); ['Hello', 'JavaScript'];

All string method:
 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
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

### apply(), call(), bind()

```js
function transition( name ){
//  Мы можем использовать на нём slice ()
//  Число один в параметре говорит о том, нужно отдать копию массива от параметра с индексом 1 и до конца. Или простым языком, просто пропустить первый элемент.
    var args = Array.prototype.slice.call(argument, 1);
    return args;
}
 transitionTo ("contact", "Today", "20"); // ["Today", "20"]

// v2п перебор arguments который есть объектом и не имеет методов

function isThreePassed(){
 const args = Array.prototype.slice.call(arguments);
 return args.indexOf(3) != -1;
}
 ```

### Объеденить 2 массива со вложеностю

 ```js
 const arr= [1, [1, 2, [3, 4]], [2, 4]];

 const flatten = (arr) =>
     arr.reduce((flat, toFlatten) =>  flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
  //flatter -> [1, 1, 2, 3, 4, 2, 4]
  ```
