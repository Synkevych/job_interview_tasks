# Переключение между базами 

use <database>

# Вывести всех Пользователей
Получить все данные из базы collection
```
db.collection.find()
// SQL
SELECT * FROM inventory
//вывести все поля с status: "D"
db.inventory.find( { status: "D" } )

```