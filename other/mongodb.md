# MongoDB

MongoDB - самая популярная из документ-ориентированных баз данных(NoSQL-модели данных). Лучше всего подходит для динамических запросов и определения индексов. Гибкая структура, которую можно модифицировать и расширять. Поддерживает Linux, OSX и Windows, но размер БД ограничен 2,5 ГБ в 32-битных системах. Использует платформы хранения MMAPv1 и WiredTiger.

## MongoDB – JSON подобная база данных, основана на спецификации BSON

MongoDB не поддерживает транзакции. Но MongoDB предоставляет множество атомарных операций, таких как сохранение документа, изменять, удалять и т.д., являются атомарные операции.

В основе базы лежит документ в контексте javascript это обычный объект, он же является основным строительным блоком.

MongoDB — это мощная, гибкая и масштабируемая база данных общего назначения.
Mongo сочетает в себе вторичные индексы, запросы с диапазонами и сортировкой, агрегацией и геопозиционные запросы.

**Особенности:**

- Высокая производительность.
- Автоматическая фрагментация.
- Работа на нескольких серверах.
- Поддержка репликации Master-Slave.
- Данные хранятся в форме документов JSON.
- Возможность индексировать все поля в документе.
- Поддержка поиска по регулярным выражениям

### What is the recommended way to delete a user?

db.dropUser("user") - method is used to removes the user form the current database.

### How often do the member of a replica set send heartbeats to each other?

Replica set members send heartbeats (pings) to each other every two seconds. If a heartbeat does not return within **10 seconds**, the other members mark the delinquent member as inaccessible.

### In the MongoDB shell, how can you tell if an index was used with a query?

db.customers.find({lastName: 'smith'}).explain()

### When the primary database in a replica set fails, when does failover begin?

### Suppose your aggregation pipeline terminated with an exception referring to exceeded memory limit. What is the best way to resolve the issue?

Increase the memory of the MongoDB server

### Which projection shows only the firstName and lastName fields of a document in the customers collection?

db.customers.find({_id:0, firstName: 1, lastName: 1})

### Give a cursor named myCursor, pointing to the customers collection, how to you get basic info about it?

myCursor.stats()

db.collection.stats()	Reports on the state of a collection. Provides a wrapper around the collStats.

### Give a cursor named myCursor which command returns a boolean value?

**cursor.hasNext()** returns true if the cursor returned by the db.collection.find() query can iterate further to return more documents.

### Give an ObjectId _id, how do you get the time it was created?

**getTimestamp()** Returns the timestamp portion of the ObjectId() as a Date.

### Which command returns all of the documents in the customers collection?

db.customers.find();

The find() method with no parameters returns all documents from a collection and returns all fields for the documents.

### Which shell query displays all citizens with an age greater than or equal to 21?

db.citizens.find({age: {$gte: 21 }})

$gte selects the documents where the value of the field is greater than or equal to (i.e. >=) a specified value (e.g. value.)

### Which MongoDB shell command should you use to back up a database?

mongodump

### What is the correct option to set up Kerberos when starting MongoDB?

--setParameter authenticationMechanisms=GSSAPI

### Команды для работы с MongoDB

- use \<database_name\> – Переключение между базами
- mongo base_name - открыть базу в консоли
- help - список команд
- show dbs - список баз данных
- show collection  - вывод списка колекций
- mongodump --db learn --out backup - резервное копирование
- db.stats() - статисктика по базе
- db.unicorns.remove() - удаление всех документов из коллекции
- db.unicorns.update({name: 'Roooooodles'}, {$set: {weight: 590}}) - обновленіе веса с помощью модификатора $set
- db.unicorns.find().sort({weight: -1}) - сортировка по весу

### Вывести всех Пользователей

Получить все данные из базы collection

```sql
db.collection.find()
SELECT * FROM inventory
--- вывести все поля с status: "D"
db.inventory.find( { status: "D" } )
```
