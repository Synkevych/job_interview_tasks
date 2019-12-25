## Join()  - не изменяет исходный массив

Метод Array.join() преобразует все элементы массива в строки, объединяет их и возвращает получившуюся строку. В необязательном аргументе методу можно передать строку, которая будет использоваться для отделения элементов в строке результата. Если строка-разделитель не указана, используется запятая.

let a = [1, 2, 3];
a.join(); // "1,2,3"
a.join(" "); // "1 2 3"

## Reverse() Изменяет порядок исходного массива
## Sort() Сортурует елементы в алфавитном порядке элемены в исхоном массиве

## Concat() Создает и возвращает новый масссив, содержащий елементы исходного массива, для которого был вызван метод. 

## Reduce()  принимает два аргумента, акумуляотр, значение, индекс и массив 
var а = [1,2,3,4,5];
var sum = a.reduce(function(x,у) { return х+у }, 0); 
// Сумма значений

var product = a.reduce(function(x,у) { return х*у }, 1); 
// Произвел, значений

var max = a.reduce(function(x,y) { 
	return (х>у)?х:у;
});
// Наибольшое значенние

## indexOf() & lastIndexOf()

// Отыскивает все вхождения значения х в массив и возвращает

function findall(a.x){
	let results = [],
	len = a.length,
	pos = 0;
	while(pos < len ){
		pos = a.indexOf(x, pos);
		if(pos === -1 ) break;
			results.push(pos);
			pos = pos + 1;
	}
	return results;
}

## Array.isArray([]) //=> true 

// inside the method there function 
var isArray = Function.isArray || function(o) { 
	return typeof о === "object" && 
	Object.prototype.toString.call(o) === "[object Array]";


## Work with string like Array 
```js
let s = "Script";
Array.prototype.join.call(s, " "); //=> "S c r i p t"
Array.prototype.filter.call(s, function(x){ return x.match(/[~aeiou]/)}).join("");	 //"aai"
```

But Array methods *push()*, *sort()*, *reverse()*, *splice()* don't work with string, this method don't change the string!


