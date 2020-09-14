# Junior Ruby Developer

## Basic questions about Ruby and Internet Concepts

### 1. Как работает ООП в Руби

[Подробнее](https://blog.topolyan.com/%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80/)

- **Инкапсуляция** достаточно хорошо работает, доступ к переменным экземпляров недоступен, они являются приватными. Доступ к переменным экземпляров нужно определять через методы *getter*/*setter*
Контроль доступа к переменным через **protected**, **private**, **public** - по умолчанию

- **Наследование** - каждый клас неявно наследуется от **Object** который наследуется от **BaseObject**. множественного наследования нет - есть примеси.

```ruby
class Dog # неявно наследует Object
  def to_s
    "Собака"
  end
  def bark
    "лает громко"
  end
end
class SmallDog < Dog # означает наследование, наследует класс Dog
  def bark # Перезаписываем
    "лает тихо"
  end
end

dog = Dog.new # (кстати, new это метод класса)
small_dog = SmallDog.new
puts "#{dog}1 #{dog.bark}" # => Собака1 лает громко
puts "#{small_dog}2 #{small_dog.bark}" # => Собака2 лает тихо
```

- **Полиморфизм** - Возможность иметь несколько классов, содержащих одноименные методы, называется полиморфизм.

### 2. Разница в использования `git rebase` `git clone`

### 3. Что делает команда `git cherry-pick`

### 4. Как работает протокол передачи HTTP

### Лямбды, Блоки и Proc используются в Руби для работы с замыканием

* proc - объект, который можно сохранить в переменную, от не имеет ограничения по количеству аргументов, у него можно хранить функцию, **return** останавливает выполнение метода 
 ```ruby 
 hello = Proc.new { puts “Я мистер прок!“ }
 ```
* labmda -является элементом класса Proc, проверяет количество аргументов которые в нее передаются, **return** завершает выполнение кода внутри нее код метода который ее вызвал продолжает работать
```ruby
lam = lambda { |x| puts x } # лямбда с одним аргументов
lam.call('Привет!') # => Привет!
```

### Что такое сокет?

Со́кет (англ. socket — разъём) — название программного интерфейса для обеспечения обмена данными между процессами. Процессы при таком обмене могут исполняться как на одной ЭВМ, так и на различных ЭВМ, связанных между собой сетью. Сокет — абстрактный объект, представляющий конечную точку соединения.
Для взаимодействия между машинами с помощью стека протоколов TCP/IP используются адреса и порты. Адрес представляет собой 32-битную структуру для протокола IPv4, 128-битную для IPv6. Номер порта — целое число в диапазоне от 0 до 65535 (для протокола TCP).

Когда две программы хотят поговорить друг с другом по сети, одна программа может открыть соединение TCP (a "socket") с другой. Первая программа должна знать IP адрес второго компьютера и порт, на котором программа прослушивает.

### Что такое интерфейс.? Дать точное определение. Как и где используется. 

В объектно ориентированных языках программирования интерфейсом называется шаблон класса, все методы которого являются абстрактными, и поэтому должны быть реализованы в каждом классе, наследующем этот интерфейс.

### Зачем нужны абстрактные класы и методы

Абстрактный метод не реализуется в абстрактном классе, но класс-наследник должен реализовать его. Зачем нам это? Это нужно если метод обязательно должен быть у всех наследников.

Абстрактные методы - это только описание метода, без "тела", оскольку абстрактный класс может и не знать, как должен работать этот метод, но каждый наследник обязан будет реализовать этот метод.

Например, каждое оружие наносит урон - без этого оно уже не оружие. Или, еще пример, каждый навык должен применяться... а животные, скажем, подавать голос 🙂 Но каждый наследник будет это делать по-своему, поэтому нам как бы и нет смысла реализовывать его в абстрактном родителе.

### При команде ps ax, как по умолчанию сортируются процессы?

Сортируются по PID процесса, тоесть времени запуска.

Ключ **а** используется для отображения всех процессов, **х** — для отображения процессов, отсоединенных от терминала, а ключ **u** обеспечивает фильтрование по имени или идентификатору пользователя, который запустил программу.

```bash
ps -ef --sort=start_time
```

### Какой лучший способ вытянуть данные сразу из нескольких таблиц?

Оператором WHERE + указания названия 2 таблиц и условия

### What is a class?

Клас это каркас из которого создаются объекты. Объекты также являются экземплярами класа. Например, Животное является класом, а птицы, рыбы, рептилли экземпляры этого класа. 

```ruby
class Animal

  # class variables
  @@type of animal = 4
end
```

### What is the difference between a class and a module?

* Модули в Руби похожи на классы в том, что они содержат набор методов и констанат, другие модули и определения классов. В отличии от класов нельза создать новый екзепляр на основе модуля, модуль не может иметь подклассы.

### What is an object?

* В руби любая закорючка – это объект какого-то класса.  Эсть много разных типов объектов, массивы, метки, даты, целые числа, строки. Благодаря наследованию от нужного объекта мы получим все методы для работы с этим класом, также это позволять понять что это за класс и понять что с ним можно слелать.

Посмотреть класс любого объекта можно вызвав у этого объекта по цепочке методы **.class** и **.name**.

### How would you declare and use a constructor in Ruby?

How would you create getter and setter methods in Ruby?
ch Navigator Interview Ruby on Rails Developer
How to Interview Your Ruby on Rails Developer
127095 VIEWS
All 
We at RubyGarage want to share our knowledge about how to interview a Ruby on Rails developer. Since our main purpose is to sell great code, we require great coders.

This article will come in handy for you when you need to test a Ruby on Rails programmer but aren’t sure what questions to ask the Rails interviewee. You can consider this article as a guide for how to interview a Ruby on Rails programmer.

We’re not going to include all the questions you could ask, as that would take more than one article. For example, we decided to omit questions about code idioms and cunning expressions in Ruby. Also, we don’t want to give away all the questions which we might ask during an interview with a developer. We don't want a developer to simply look for answers on the Internet, as our main purpose is to ensure that we check the developer's grasp of the language and framework. We merely want to see how a Ruby software engineer expounds their knowledge of the domain.

Now let's chalk out the structure of a Ruby on Rails interview. The article will be divided into several parts since we usually check separate domains of knowledge. Here is the structure we typically use:

Ruby questions;
Ruby on Rails questions;
A pair programming task;
A home task.

## Ruby tasks 

What is a class?
What is the difference between a class and a module?
What is an object?
How would you declare and use a constructor in Ruby?
How would you create getter and setter methods in Ruby?
Describe the difference between class and instance variables?
What are the three levels of method access control for classes and what do they signify?
What does ‘self’ mean?
Explain how (almost) everything is an object in Ruby.
Explain what singleton methods are. What is Eigenclass in Ruby?
Describe Ruby method lookup path.
Describe available Ruby callbacks. How can we use them in practice?
What is the difference between Proc and lambda?

## Biseness application

What is Rack?
Explain the Rack application interface.
Write a simple Rack application.
How does Rack middleware works?

## Ruby jems 

What is RubyGems? How does it work?
How can you build your own Ruby gem?
Explain the structure of a Ruby gem.
Can you give me some examples of your favorite gems besides Ruby on Rails?

## English part

1. What is the name of institute where you work now?

2. What do you do, what is the title  of you dissertation?

3. What Ruby programming language can be used for?
