# job_interview_tasks

### 1 Работа с ошибками git
1 В ветке v1 обнаружилась ошибка, через это мы не можем вернуть наши изменения из v2 в master, что нужно сделать чтобы исправить проблемы с веткой v1 ? 

(master) - (v1) - (v2)

### 2 Как слить две ветки v2 & v3 если при автоматическом слиянии есть ошибка ? 

(master) - (v1) - (v2)
          \ _ _ _ (v3)
          
### 3 Чем отличаются симетричное и асиметричное шифрование 

### 4 Методы сортировки массивов

### 5 Как взять от 7.32 дробную часть ? 

### 6 Как с помощью чистой функции добавить к state новый массив

let arr = [1,2,3];
let newArr = [4,5];

Способ 1:

const addEndOfMass = (state = {}, action ) => {
  return { Object.asing({}, ...state, newArr)}
  }
  
### 7 Найболее сложное задание? 

Правильно давать имена переменным и функциям. 

### 8 Почему console.log("string".length)  возвращает число ?


### 9 Как функция изменит переменные  / Что вернет console.log(obj, num) 

let obj = { }; 
let num;

function changeItem(obj, num){
          obj.name = "Roman";
          num = 10;
}
console.log(obj, num) // {name: "Roman"} undefined

Сдесь сработает замыкание, если функцию не передавть параметром то она сработает так как и ожидалось 

### 10 Как поведет себя функция ?
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
