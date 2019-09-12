### 1 Show duplicate elements in an array
Input: [1,2,3,7], [4,2,3,9]; [2,3,5,1,12,4], [8,1,4,2,3]
Output: [2,3]; [2,3,1]

### 2 Create new object using method reduce
Input: [{a:1}, {a:2}, {a:3}]
Output: {a:1, index:0}, {a:2, idex:1}

### 3 Блочные и строчные элементы
Строчные элементы могут содержать только данные и другие строчные элементы.
Строчными елементами являются: 
<a>, <area>,
<b>, <bdo>, <bdi>,
<cite>, <code>,
<dfn>, <del>,
<em>,
<i>, <iframe>, <img>, <ins>,
<kbd>,
<label>,
<map>, <mark>,
<s>, <samp>, <small>, <span>, <strong>, <sub>, <sup>,
<time>,
<q>,
<ruby>,
<u>,
<var>
Все остальные блочные.

### 4 Using bash open file and remove duplicats 
### 5 Using bash create file and send a log to it
### 6 What is HTTP ? 
We have http & ftp protocol 
http – stands for Hyper Text Transfer Protocol

WWW is about communication between web clients and servers

Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses.

Communication between clients and servers is done by requests and responses:
### 7 Run full deleting in PostgreSQL 
### 8 center a block inside another block
––––––
| [] |
______
### 9 CSS after and before tag

### 10 Sorting and finding methonn in JavaScript 
filter
find(fn) // find only one element!!
findIndex(fn)
sort
every 
includes
forEach()
indexOf

### 11 JavaScript Closures
JavaScript variables can belong to the **local**, **global** or **block {}** scope.

### 12 Git fetch command

### 13 REST-API 
это общие принципы организации взаимодействия приложения/сайта с сервером посредством протокола HTTP. Особенность REST в том, что сервер не запоминает состояние пользователя между запросами - в каждом запросе передаётся информация, идентифицирующая пользователя (например, token, полученный через OAuth-авторизацию) и все параметры, необходимые для выполнения операции.

Всё взаимодействие с сервером сводится к 4 операциям (4 - это необходимый и достаточный минимум, в конкретной реализации типов операций может быть больше):
1. получение данных с сервера (обычно в формате JSON, или XML)
2. добавление новых данных на сервер
3. модификация существующих данных на сервере
4. удаление данных на сервере

Операция получения данных не может приводить к изменению состояния сервера.

Для каждого типа операции используется свой метод HTTP-запроса:
1. получение - GET
2. добавление - POST
3. модификация - PUT
4. удаление - DELETE