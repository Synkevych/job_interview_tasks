// Пропустить все null, undefined и несуществ. элементы в массиве

if (!arr[і]) continue;

// Пропустить undefined + несуществ. эл. // тело цикла

if (a[і] === undefined) continue;

// Пропустить несуществующие элементы

if (!(i in a)) continue;

// Использование forEach

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

// this
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
let o2 = new Object(); // === let o = new Object;

// Замыкаания и лексическая область видимости
var scope = 'global scope'; // Глобальная переменная
function checkscope() {
  var scope = 'local scope'; // Локальная переменная
  function f() {
    return scope;
  } // Вернет значение локальной переменной scope
  return f();
}
checkscope(); // => "local scope"

// Реализация функции с замыканние

var uniquelnteger = (function() {
  // Определение и вызов
  var counter = 0; // Частное значение для функции ниже
  return function() {
    return counter++;
  };
})();

// Использование метода apply() для поиска макс. елемента.
var biggest = Math.max.apply(Math, array_of_numbers);

// Пример использования метода bind()
function f(у) {
  return this.x + у;
} // Функция, которую требуется привязать
var о = { х: 1 }; // Объект, к которому выполняется привязка
var g = f.bind(o); // Вызов g(х) вызовет o.f(x) g(2) // => 3

// Метод bind() для ECMAScript 3
if (!Function.prototype.bind) {
  Function.prototype.bind = function(o) {
    let self = this,
      boundArgs = arguments;
    return function() {
      var args = [],
        i;
      for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
      for (i = 0; i < arguments.length; i++) args.push(arguments[i]);
      return self.apply(o, args);
    };
  };
}

// Все функции в js имеют метод toString() 
// они используются для переобразование в строку на выходе 

