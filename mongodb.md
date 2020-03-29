# MongoDB

## MongoDB – JSON подобная база данных, основана на спецификации BSON

В основе базы лежит документ в контексте javascript это обычный объект, он же является основным строительным блоком.

MongoDB — это мощная, гибкая и масштабируемая база данных общего назначения. 
Mongo сочетает в себе вторичные индексы, запросы с диапазонами и сортировкой, агрегацией и геопозиционные запросы.

### Переключение между базами

use \<database\>

### Команды для работы с MongoDB

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
