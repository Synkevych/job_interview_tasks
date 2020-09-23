# Basic SQL questions

### Easy

### What is the difference between an inner join and an outer join?

[INNER] JOIN - внутреннее
(LEFT|RIGHT) [OUTER] JOIN - внешнее, или справа, или слева
FULL [OUTER] JOIN - внешнее, справа и слева, т.е. полнное

### What is an index and why would you use it?

Индекс (англ. index) — объект базы данных, создаваемый с целью повышения производительности поиска данных.

Некоторые СУБД расширяют возможности индексов введением возможности создания индексов по столбцам представлений[1] или индексов по выражениям.[2] Например, индекс может быть создан по выражению upper(last_name) и соответственно будет хранить ссылки, ключом к которым будет значение поля last_name в верхнем регистре. Кроме того, индексы могут быть объявлены как уникальные и как неуникальные. Уникальный индекс реализует ограничение целостности на таблице, исключая возможность вставки повторяющихся значений.  
Существует два типа индексов: **кластерные** и **некластерные**. При наличии кластерного индекса строки таблицы упорядочены по значению ключа этого индекса. Если в таблице нет кластерного индекса, таблица называется кучей[3]. Некластерный индекс, созданный для такой таблицы, содержит только указатели на записи таблицы. Кластерный индекс может быть только одним для каждой таблицы, но каждая таблица может иметь несколько различных некластерных индексов, каждый из которых определяет свой собственный порядок следования записей

Типы индексов:
    * Кластеризованный
    * Некластеризованный
    * Уникальная идентификация
    * Filtered
    * columnstore
    * Хэш
    * Некластеризованный индекс, оптимизированный для памяти

### When would you use an index across two columns?

### What is a foreign key?

FOREIGN KEY используется для ограничения по ссылкам.
Когда все значения в одном поле таблицы представлены в поле другой таблицы, говорится, что первое поле ссылается на второе. Это указывает на прямую связь между значениями двух полей.

Внешние ключи позволяют установить связи между таблицами. Внешний ключ устанавливается для столбцов из зависимой, подчиненной таблицы, и указывает на один из столбцов из главной таблицы. Как правило, внешний ключ указывает на первичный ключ из связанной главной таблицы.

### What is a trigger?

A database trigger is special stored procedure that is run when specific actions occur within a database.  Most triggers are defined to run when changes are made to a table’s data.  Triggers can be defined to run instead of or after DML (Data Manipulation Language) actions such as INSERT, UPDATE, and DELETE.

Triggers help the database designer ensure certain actions, such as maintaining an audit file, are completed regardless of which program or user makes changes to the data.
The programs are called triggers since an event, such as adding a record to a table, fires their execution.

Triggers and their implementations are specific to database vendors.  In this article we’ll focus on Microsoft SQL server; however, the concepts are the same or similar in Oracle and MySQL.

### What is DML

Data Manipulation Language, actions such as SELECT, INSERT, UPDATE, DELETE and MERGE.

### What is DDL

Data Definition Language  (язык описания данных)

Отличие DDL в разных СУБД в основном заключаются в типах данных

### Первичный ключ

При создании таблицы желательно, чтобы она имела уникальный столбец или же совокупность столбцов, которая уникальна для каждой ее строки – по данному уникальному значению можно однозначно идентифицировать запись. Такое значение называется первичным ключом таблицы. Для нашей таблицы Employees таким уникальным значением может быть столбец ID (который содержит «Табельный номер сотрудника» — пускай в нашем случае данное значение уникально для каждого сотрудника и не может повторяться).