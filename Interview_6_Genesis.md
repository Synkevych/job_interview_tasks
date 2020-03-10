## Result - fail (english level less than required)

## Position - Middle Back-End Developer (Node + Express)

1. What is Rest operator and what use case of using them? 

2. What is Spred operator and what use case of using them? 

3. What is benefit to use rest operator on array/object?

4. Yeld Function 

5. Promises

6. Nested rountes innside Express

7. What is routes ?  
Маршрутизация определяет, как приложение отвечает на клиентский запрос к конкретному адресу (URI).
Для обработки запроса можно указать несколько функций обратного вызова, подобных middleware.
```js
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});
```
8. Difference betwine SQL and noSQL database
  
| __Type__ | __SQL__ | __NoSQL__ |
|-------------|------------|------------|
| Management system         | Relational DB      | Distributed DB   |  
| Scalable                  | Vertically         | Horizontally     |  
| complex queries           | can be used        | not good for it  |  
| Schema                    | Fixed & predefined | Dynamic          |  
| Hierarchical Data Storage | Not suit           | Best suitable    |

9. What are the benefits usin mongoose opposed to basic mongo library.  
Основная - способность строить структуры по которым проверяются данные на валидность, возможность дополнение данных базовыми если их нет в запросе. 

10. What are the Amazone web services?  
AWS предоставляет несравнимо больше сервисов и их функций, чем любой другой поставщик облачных услуг: от инфраструктурных технологий, таких как инструменты для вычисления, хранилища и базы данных, до инноваций, например машинного обучения и искусственного интеллекта, озер данных и аналитики, а также Интернета вещей. С ними клиент сможет быстрее, легче и дешевле перенести текущие приложения в облако и реализовывать в нем любые возможные проекты.

AWS также предоставляет самые широкие функциональные возможности для своих сервисов. Например, AWS предлагает на выбор много баз данных, специально созданных для различных типов приложений, чтобы клиент мог подобрать правильный инструмент для эффективной и экономной работы.

11. What is middleware in express?  

Функции промежуточной обработки (middleware) - это функции, имеющие доступ к объекту запроса (req), объекту ответа (res) и к следующей функции промежуточной обработки в цикле “запрос-ответ” приложения. Следующая функция промежуточной обработки, как правило, обозначается переменной next.

Функции промежуточной обработки могут выполнять следующие задачи:

Выполнение любого кода.
Внесение изменений в объекты запросов и ответов.
Завершение цикла “запрос-ответ”.
Вызов следующей функции промежуточной обработки из стека.

12. Two difference type in JS - how the pass they value(link, value)  
Базовые типы не изменяемые.
**6 Базовых типов(primitive):**
- числа (Number)
- строки (String)
- логические (Boolean)
- пусто (Null)
- неопредиленный (Undefined)
- символ (Symbol)

Объекты способны принимаать разные формы и значения, передаются по ссылке.
**5 встроеных объектов:**  
- Array
- Data
- RegExp
- Map and WeakMap
- Set and WeakSet


13. What is Async/Await ?  
Специальный синтаксис для работы с промисами
Ключевое слово __async__ гарантирует, эта функция в любом случае вернёт промис.
Ключевое слово __await__ заставит JS ждать, пока промис справа от await не выполнится.  
```js
async function f() {
  return 1; // == return Promise.resolve(1);
}

f().then(alert);
// функция возвратит выполненный промис с результатом 1
```


14. Index table in MongoDB

15. What difference betwen protorype and class in JS?

16. Authentication Methods based on (Using JWT for API authentication).

17. How data is parsed to the database (checking types and correctness of data)?  
mongoose library 

18. Do you know lodash library? What is it used for? Do you now the basics methods from it?

19. Data normalithation 

20. What do you know about Babel ?

21. GraphQL and REST pros and cons 

22. What is WebSocket is what it is better than HTTP?  
WebSocket — протокол связи поверх TCP-соединения, предназначенный для обмена сообщениями между браузером и веб-сервером в режиме реального времени.  

23. What do you know about Error Object in JS? 
JS имеет множество встроеных конструкторов объектов ошибок, таких как __Error__, __SyntaxError()__, __TypeError()__ и других которые используются в инструкции _throw_.
Объекты ошибок, создаваемые этими конструкторами. имеют свойства:
- name – значение свойства _name_ функции конструктора создающего объект. 
- message - строка которая передается конструктору при создании объекта.

Конструкторы ошибок можно вызывать без оператора new.
```js
// bad 
throw new Error("uh-no");

// god 
throw {
  name: "Error",
  message: "uh-no"
  };

// or 

throw Error("uh-no");
```

24. What can you say about Wrapper Object? 
Объекты обертки обладают рядом интересныйх свойств и методов. Фактически для каждого примитивного типа есть объект обертка. Объекты числа имеют методы _toFixed()_, _toExponential()_. Объекты-строки имеют методы _substring()_, _charAt()_, _toLowerCase()_. _length_.
Использования конструкторов без оператора _new_ преобразут аргументы в элементарные значения.
```js 
typeof Number(1);     // "number"
ttypeof Number("1");    // "number"
```

24. TypeScript, do you use it?  

## English
- What is your real level of English?  
*I think you just got here to check it out. Let's check it out now.* 
- How do you use English in your daily life? 
*I try to read english books, watch movie with original sountrack, write daily schedule in this language, listen to technical podcasts*  
- How mush experince do you have using English ?  
- Which technologies did you use in your projects?  
- How did you continue learning english ? (Reading books, attending courses or something else)  
- How long have you been in using Node.js  
- How you use English in you workflow ?   
- How often do you use inglish in your work? 
* The last project was lasted about 3 months and we talked through mail. 


