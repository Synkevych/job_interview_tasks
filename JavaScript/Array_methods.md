# Methods to work with array and string

## String Methods

Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

* charAt()	Returns the character at the specified index (position)
* charCodeAt()	Returns the Unicode of the character at the specified index
* concat()	Joins two or more strings, and returns a new joined strings
* endsWith()	Checks whether a string ends with specified string/characters
* fromCharCode()	Converts Unicode values to characters
* includes()	Checks whether a string contains the specified string/characters
* indexOf()	Returns the position of the first found occurrence of a specified value in a string
* lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
* localeCompare()	Compares two strings in the current locale
* match()	Searches a string for a match against a regular expression, and returns the matches
* repeat()	Returns a new string with a specified number of copies of an existing string
* replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
* search()	Searches a string for a specified value, or regular expression, and returns the position of the match
* slice()	Extracts a part of a string and returns a new string
* split()	Splits a string into an array of substrings
* startsWith()	Checks whether a string begins with specified characters
* substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
* substring()	Extracts the characters from a string, between two specified indices
* toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
* toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
* toLowerCase()	Converts a string to lowercase letters
* toString()	Returns the value of a String object
* toUpperCase()	Converts a string to uppercase letters
* trim()	Removes whitespace from both ends of a string
* valueOf()	Returns the primitive value of a String object

## Array methods

> Join()  - не изменяет исходный массив

Метод Array.join() преобразует все элементы массива в строки, объединяет их и возвращает получившуюся строку. В необязательном аргументе методу можно передать строку, которая будет использоваться для отделения элементов в строке результата. Если строка-разделитель не указана, используется запятая.

```js
let a = [1, 2, 3];
a.join(); // "1,2,3"
a.join(" "); // "1 2 3"
``` 

> Reverse() Изменяет порядок исходного массива
> Sort() Сортурует елементы в алфавитном порядке элемены в исхоном массиве

```js
const nums = [1,5,10,100,3,6,50,70,2,8,101,10];
const sorted = nums.sort((a,b) => a - b);

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

> splice(start, deletCount, item1, item2) может *добавлять* или *удалять* елементы в масиве начиная с указанного

```js
array.splite(6); // - уменшит размер масива до 6, альтернатива array.length(6);
arrayy.splite(10, 0, 100); // - добавыть елемент 100 на индекс 10, если такой елемент есть то сдвинет его на следуюющий 
```

> Concat() Создает и возвращает новый масссив, содержащий елементы исходного массива, для которого был вызван метод. 

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
//  array3 ["a", "b", "c", "d", "e", "f"]
``` 
> Reduce()  принимает два аргумента, акумуляотр, значение, индекс и массив

```js
var а = [1,2,3,4,5];
var sum = a.reduce(function(x,у) { return х+у }, 0); 
// Сумма значений

var product = a.reduce(function(x,у) { return х*у }, 1); 
// Произвел, значений

var max = a.reduce(function(x,y) { 
	return (х>у)?х:у;
});
// Наибольшое значенние
```

>indexOf() & lastIndexOf()

```js
// Отыскивает все вхождения значения х в массив и возвращает их
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
```
> Array.isArray([]) //=> true 

```js
// inside the method there function 
var isArray = Function.isArray || function(o) { 
	return typeof о === "object" && 
	Object.prototype.toString.call(o) === "[object Array]";
```

> Work with string like Array 

```js
let s = "Script";
Array.prototype.join.call(s, " "); //=> "S c r i p t"
Array.prototype.filter.call(s, function(x){ return x.match(/[~aeiou]/)}).join("");	 //"aai"
```

But Array methods *push()*, *sort()*, *reverse()*, *splice()* don't work with string, this method don't change the string!
