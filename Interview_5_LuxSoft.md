# Бек офисисы и фронт офисы компании
Похоже на разделение как в фронтенде 
Фронт офис работает с клиентами, в то время как бек нацелен на работой с внутринними процесами. 

# 1 Всплытие и Перехват
## Всплытие
При наступлении события обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее, вверх по цепочке вложенности.
```html
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
Всплытие гарантирует, что клик по внутреннему <p> вызовет обработчик onclick (если есть) сначала на самом <p>, затем на элементе <div> далее на элементе <form>, и так далее вверх по цепочке родителей до самого document.

Всплытие идёт прямо наверх. Обычно событие будет всплывать наверх и наверх, до элемента <html>, а затем до document, а иногда даже до window, вызывая все обработчики на своём пути.

Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие.

Для остановки всплытия нужно вызвать метод event.stopPropagation().

## Погружение
В современном стандарте, кроме «всплытия» событий, предусмотрено ещё и «погружение».

Оно гораздо менее востребовано, но иногда, очень редко, знание о нём может быть полезным.

Строго говоря, стандарт выделяет целых три стадии прохода события:

Событие сначала идёт сверху вниз. Эта стадия называется «стадия перехвата» (capturing stage).
Событие достигло целевого элемента. Это – «стадия цели» (target stage).
После этого событие начинает всплывать. Это – «стадия всплытия» (bubbling stage).

# 2 Свойство position: absolute, relative, fixed, static, inherit, initial
Несколько разных методов как поставить елемент в центр, их плюсы и минусы
Вопросы по flex-box

# 3 CORS – Cross Origin Resourse Sharing (кросдоменные запросы)
Механизм, использующий дополнительные HTTP-заголовки, чтобы дать возможность агенту пользователя получать разрешение на доступ
к выбраным ресурсам на домене, отличном от того что использует сайт в данный момент.
Блаузеры в целях безопасности ограничивают cros-origin запросы, инициируемые скриптами. 

Современные браузеры используетю CORS в API-контейнерах таких как XMLHtttpRequest && Fetch.

Для этого в заголовок XmlHttlRequest добавляется заголовок AccesCotrol-Allow-Origin.

# 4 Архитектура REST - Representational State Transfer — «передача состояния представления»
Это не стандарт а **рекомендация** как можно создавать веб приложения, способ взаимодействия клиента и сервера.  
Он используется вместе с HTTP запросами для запроса к серверу 
Используются методы GET, POST, PUT, UPDATE, DELETE


# 5 Замыкание в JS 
Бывает 3 типов: блочное, функцональное и глобальное (как и типов области видмости переменных)
Когда говорят "замыкание функции" подразумевают не саму функцию а внешние переменные
**LexicalEnviropment** && **VariableEnviropment** 
При инициализации функции интерпретатор сооздает пустой объект LexicalEnviropment и заполняет его.

Переменную во внешней оласти видиости функция может не только читать но и изменять.

Замкнутое выражение позволяет получить доступ к сущностям к которым у нас обычно не было доступа.
```js 
let f;
{
   let o = {note: "Secure"};
   f = function() {
      return o;
   }
}
let oRef = f();
oRef.note = "Not Secure !!!"; // we change object inside block scope
f(); // {note: "Not Secure !!!"}
```
Для исправления подобного выше поведения используют IIFE.

Замыкания используя var значительно отличается ( тут работает только глобальное и функциональное замыкание)
```js 
var x = 3;
if(x === 3){
   var x = 10;
   console.log(x); //=> 10
}
console.log(x); //=> 10 we change globar variable
```
Временная мертвая зона - концепция для понимания выражений объявленых через *let* & *const* – переменная не существует до ее объявления. 
# 6 MVC модель плюсы и минусы 

# 7 Свойства Bind, Apply, Call,
Bind - принимает this, и другие аргументы, возвращает функцию. 

1. **Call** - позволяет вызваLexicalEnviropmentть функцию с определенным значением this.
Первое аргумент – значение, к которому вы хотите привязать this  а все остальные аргументы становяться аргументами вызываемой функции.
```js 
const bruce = { name: "Bruce"};

function greet(){
   return `Привет! Меня зовут ${this.name}!`;
}
greet.call(bruce); // Привет! Меня зовут Bruce!

function update(birthYear, occupation){
   this.birthYear = birthYear;
   this.occupation = occupation;
}
update.call(bruce, 1994, "singer");
// {name: "Bruce", birthYear: 1994, occupation: "singer"};

```

2. Метод **apply** – идентичен методу call, за исключением способа которым он обрабатывает аргументы функции. 
Ему аргументы передаются в виде массива.
```js 
const arr = [1,3,-5,11,7];
Math.max.apply(null, arr); // вместо this передаем null
// Оператор расширения **...** позволяет сделать тоже самое
// Math.max(...arr);
```

3. **Bind** позволят определить значение для переменной this 
Позволяет парманентно(постоянно) ассоциировать значение для this с функцией. 
```js 

const updateBruce = update.bind(bruce); // в this у нас объект bruce, можем менять его свойства birthYear || occupation

updateBruce(1955, "actor");
// {name: "Bruce", birthYear: 1955, occupation: "actor"};

```
# 8 JSON Web Token - исп. для передачи данных для аутентификации в клиент-серверных приложениях
Используется для сохранения пароля пользователя на стороне сервера 
Для генерирования хеша используесть "соль" которая защищает пароль от взлома и расшифровки 
Также она позволяет хранить одинаковые пароли разных пользователей, с добавление соли даже одинаковые пароли выглядят по разному 
Соль в Node.js + Express это отдельны файл на сервере с одной строчкой кода, текста. 

# Задачи на JS 
```js
// #1

var a = 1;
function add(a){
 a = 5;
}

add(a);
console.log( a ); //=> 1 not changed

// #2

let arr = [1, 2, 3, 4];
function change(mass) {
   mass[4] = 5;
}

change(arr);
console.log(arr[4]); //=> 5 changed

// #3 

let arr = [1, 2, 3, 4];
function change(mass) {
   mass = 5;
}

change(arr[1]);
console.log(arr[1]); //=> 2 not changed

// #4

let arr = [1, 2, 3, 4];
function change(mass) {
   mass = {a: 200};
}

change(arr);
console.log(arr); //=> [1,2,3,4] not changed

// #5
let obj = { };
let a = {a:10};
let b = {b:20};

obj[a] = 123;
obj[b] = 456;

console.log(obj);

# Remove duplicate in aray 
```js 
let nums = [1, 2, 2, 4];
let newNums = [...new Set(nums)]; //=> [1, 2, 3]
```

# Change the logic prevent global scoping
```js 
let func = function () {

   {
      let l = 'let';
      var v = 'var';
   }
   console.log(v);
   console.log(l);
}
func();

// change block scoping to IIFE 
// add IIFE - Immediately Invoked Function Expressionn 
(function(){
   let = 'let';
   var = 'var';
})();
```

# Wha the answer is ? 
There is Automatic Type Conversion working 
```js 
console.log( 5 < 6 < 7);   // => true < 7 => 1 < 7 => true 
console.log( 7 > 6 > 5);   // => true > 5 => 1 >  => false
```

# What would be the resut of function ?

```js 
let a = () => arguments;
console.log( a('hi') ); // => there is an error, inside arrow function none arguments, arguments is not defined 
```
to make this code work use destructurization
```js 
let a = (...args) => args;
console.log( a('hi') ); // => "hi"
```

# Auto comliting semicolon 
``` let x = function(){
   return          // => return ;
   {
      message: "hi"
   }
}
console.log(x());
```

# Dont allow user change the profile
```js 
let profile = {
   name: 'Roman'
};

Object.freeze(profile); // prevent - change, create, delete
Object.seal(profile); // allow change, prevent create, delete

profile.age = 25; // dont allow do this

console.log(profile);

Object.defineProperty(profile, 'age', { 
   value: 3,
   writable: false
}); // => dont allow to change the value 
```js

# What the result ? 

``` 
console.log(Math.max()); // => -Ifinity - the smalest number 

# Operator typeof at ES6 work oddly
```js
type of null; // object

type of x; //=> there is an error !
let x = 100;
```

# What the result of function execution?
```js 
var value = 0;

function f() {
  if (1) {
    value = true;     //=> change global value
  } else {
    var value = false;  //=> this code will not be executed 
  }

  alert( value );
}

f();      //=> true 
```

# What is Coercion in JavaScript? 
In JS conversion between different two build-in types called coercion. Coersion comes in two forms in JS: explicit and implicit.
```js 
let a = Number( "42" ); // explicit coercion 
let b = "42" * 2; // implicit coerced
```

# What is Scope in JS ?
In JavaScript, each function gets its own scope. Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables.

A variable name has to be unique within the same scope. A scope can be nested inside another scope. If one scope is nested inside another, code inside the innermost scope can access variables from either scope.

# What is closure in JS? 
A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

The closure has access to variable in three scopes:

Variable declared in his own scope
Variable declared in parent function scope
Variable declared in global namespace

# The Prototype Design Pattern 
The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object. The Prototype pattern is also referred to as the Properties pattern.

An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database. The prototype object holds the default values that are copied over into a newly created business object.

Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes

# What is npm?
npm stands for Node PAckage Manager

# SOLID принцип ООП 
Рекоменации для принципов постройки модулей. 
Single Responsibility 
Open-Closed 
Liskov Substitution 
Interface segregation 
Dependency inversion 