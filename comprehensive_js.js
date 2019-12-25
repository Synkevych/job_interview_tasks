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

let square = function(x) { return x*x; };


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
