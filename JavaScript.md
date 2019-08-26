# 1 Как взять от 7.32 дробную часть?
double.toString().split(".") // ["4", "234"]

let double = 7.32 
~~ double; 		// 7 двойное НЕ (~)
double ^ 0 		// 7 Исключающее ИЛИ (^) с нулём
double.toFixed()	// "7"
double.toPrecision(1)	// "7"
Math.round(double)

# 2 Как с помощью чистой функции добавить к state новый массив

let arr = [1,2,3];
let newArr = [4,5];

Способ 1:

const addEndOfMass = (state = {}, action ) => {
  return { Object.asing({}, ...state, newArr)}
  }
  
# 3 Найболее сложное задание? 

Правильно давать имена переменным и функциям. 

# 4 Почему console.log("string".length)  возвращает число ?
Разница между  let str1 = new String("string") & let str2 = "string";
str.length — это числовое свойство не функция
Содержимое строки в JavaScript нельзя изменить. 
Имеет методы Методы toLowerCase() и toUpperCase()  str.trim() — убирает пробелы в начале и конце строки.
str.repeat(n)

# 5 Как функция изменит переменные  / Что вернет console.log(obj, num) 

let obj = { }; 
let num;

function changeItem(obj, num){
          obj.name = "Roman";
          num = 10;
}
console.log(obj, num) // {name: "Roman"} undefined

Сдесь сработает замыкание, если функцию не передавть параметром то она сработает так как и ожидалось 

# 6 Как поведет себя функция ?
Более подробно – [https://habr.com/ru/company/ruvds/blog/340194/]

let i = 0;

for (i; i < 10; i++) {
	setTimeout( () => 
	console.log(i), 100)
}
// (10) 10 
чтобы вывести числа от 0 - 9
– – – – – – – – – – – – – – – – – – 
Поведение изменится если использовать let позволяет создавать новую привязку при каждом вызове функции

for (let i = 0; i < 10; i++) {
	setTimeout( () => 
	console.log(i), 100)
}
– – – – – – – – – – – – – – – – – – 
Явно паредать параметр во внутреннюю функцию

for (var i = 0; i < 10; i++) {
	setTimeout(
		function(i) {
			return function() {
				console.log(i);
			};
		}(i),
		100 ); }
– – – – – – – – – – – – – – – – – – 
Похожая задача только с использованием массива 

const arr = [10, 12, 15, 21];
for (const [i, item] of arr.entries()) {
    setTimeout(console.log, 0, `Index: ${i}, element: ${item}`);
}

# 7 Какую роль играют { } [Curly brackets or braces]
funtion foo(){
let i = 10;
let b = {}:
	{ i += 5;
	  b.name = "Bohdan";
	}
	console.log(i, b) 
Только декоративную, никак не влияют на код
