# job_interview_tasks
Задание которые мне встречались на интервью, позиция Junior Front-End Developer

## Задания git
https://github.com/Synkevych/job_interview_tasks/blob/master/git.md

## Задания JavaScript
https://github.com/Synkevych/job_interview_tasks/blob/master/JavaScript.md

## Задания общие
### 3 Чем отличаются симетричное и асиметричное шифрование
Метод **Симетричного шифрування**
передбачає використання одного і того ж ключа що зберігається у секреті для зашифрування та розшифрування даних 
- основний недолік ключ повинен бути відомий і відправнику і одержувачу 

Метод **Асиметричного шифрування**  в його основі лежить поняття односпрямованої функції що має властивості - прості обчислення значення функції y = f ( x ),  існування оберненої функції  x = f-1(y) 
Цей метод передбачає використання двох ключів. Один з них несекретний і може публікуватися разом з іншими відомостями про користувача, інший секретний і відомий тільки одержувачу - для розшифрування. 

### 4 Методы сортировки массивов
В JS для этого можна использовать методы **sort, filter, find, findIndex**

- **Пузырьковый** - при первом проходе самое большое число будет справа
```
22 -1 88 -22
-1 22 -22 88
-1 -22 22 88
-22 -1 22 88
```
- **Методом выбора** - находится минимальный елемент массива и ставится слева, следующий рас начинаем поиск с n-1  елемента 
```
22 -2 88 -22
-22 22 -2 88
-22 -2 22 88
```
- **Сортировка вставками** – на i-том етапе делается вставка i-го елемента в нужную позицию среди елементов а[1], a[2], ... a[i-1], которые уже отсортированы
```
22 -2 88 -22 
-2 22 88 -22
-22 -2 22 88
```
- **Быстрая сортировка**
Швидке сортування полягає в тому, що множина елементів В { k1, k2, …, kn } перетворюється на множину B1, {k1}, B2, де В1 - підмножина В з елементами, не більшими за k1, а В2 - підмножина В з елементами більшими k1. Причому елемент k1 після розбиття множини В буде перебувати на потрібному місці. Далі до множин B1 і B2 знову застосовують впорядкування швидким сортуванням.

### 12 Сколько информации можно записать в 1 байт / 8 бит 

8 бит =  1111 1111 = 2^8-1 = 256-1 = ***255*** максимальное число в 10 системе исчисления

Перевод с 2 системы в 10 -  1111 = 2^3*1 + 2^2*1 + 2^1*1 + 2^0*1 = 8 + 4 + 2 + 1 = 15 

Используя методы в JS:
```javascript 
parseInt(1111,2) 	// 15

// Обратный перевод 
+parseInt(255).toString(2)	//1111 1111 
+(45).toString(2)	//101101
```

### 13 В предыдущем месяце зарплата была 70$ в текущем 100$, на сколько % увеличилась зарплата
 (100-70) / 70 = 0.429
 
 Увеличилась на 43%.