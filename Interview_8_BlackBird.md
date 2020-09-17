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

### What are some advantages of using Ruby

* Pure Onject-Oriented Language
* Open-Source
* Metaprogramming
* Cleand and Simple Syntax

### How would you freeze and object in Ruby?

```ruby
water.freeze
if( water.frozen? )
   puts "Water object is a frozen object"
else
   puts "Water object is a normal object"
end
```

### Ruby probides 4 types of variables, list them

* global variables begin with $  
* local variables begin with a lowervase letter or an underscore
* class variables begin @@ and are shared by all instances of the class that it is defined in
* instance vatiables begin with @ and are similar to class variables exept that they are local to a single instance of a class in which they are instantiated

### Name three levels of access control for Ruby methods

* public
* private
* protected - only accessible within their defining class and its subclasses

### Explain the role of modules and mixines in Ruby

### Action Cable

Позволяет использовать Web Socets для написания функциональности передачи данных в режиме реального времени

### Active Record - М в MVC

Является  Object Rational Mapping(ORM) фреймворком обектно реляционное отображение которое помогает получать данные из БД без написания SQL кода.

### Мотоды создание нового ресурса

* build - псевдрним для new
* create - эквавилентно **new**  с последующим **save**, и вернет модель независимо от результата сохранения
* create! - эквавиленто **new** с последующим **save!** вернет ошибку если сохранение не удается 
* new - создает но не сохраняет
* save - вернет true / false

### Что означает знак восклицания в методах 

Опасный метод который модифицирует сам обект, они изменяют состояние, на которое у кого-то еще может быть ссылка.
В Rails восклицательный знак часто означает, что метод будет выдавать исключение при сбое, а не отказывать молча.

### Способ обмена переменными экземпляра

```ruby
attr_accessor :var
attr_reader :var

attr_writer :age
# gбудет преобращовано в
def age=(value)
  @age = value
end
```

### 2. Разница в использования `git rebase` `git clone`

### 3. Что делает команда `git cherry-pick`

* берет изменения с одного коммита и применяет их в виде нового коммита к текущей ветки.

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

## Ruby tasks

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

Конструктор используется для инициализации состояния объекта. 
Способ создания объектов в Ruby — вызов метода new в классе, фактически это вызывает метод initialize.

Метод initialize в Ruby — это специальный метод, который действует как конструктор, как мы увидим в примере ниже.

```ruby
class Person
  def initialize (name, age) # "Конструктор"
    @name = name
    @age = age
  end
  def get_info
    @additional_info = "Интересно"
    "Имя: #{@name}, возраст: #{@age}"
  end
end

person1 = Person.new("Джо", 14)
p person1.instance_variables # [:@name, :@age]
puts person1.get_info # => Имя: Джо, возраст: 14
p person1.instance_variables # [:@name, :@age, :@additional_info]
```

### How would you create getter and setter methods in Ruby?

Они используются для доступа к переменным екземпляра класса. Для доступа к ним нужно определить методы *getter/setter*.
Синктаксис методов:  
* attr_accessor — getter и setter
* attr_reader — только getter
* attr_writer — только setter

```ruby
class Person 
  def initialize (name, age) # Конструктор
    @name = name 
    @age = age 
  end 
  def name # name getter
    @name 
  end 
  def name= (new_name) # name setter
    @name = new_name 
  end 
end 
```

### Describe the difference between class and instance variables?

Разница в области видимости, **@name** - переменные экземпляра класса, **@@name** - переменные самого класса

What are the three levels of method access control for classes and what do they signify?

### What does ‘self’ mean?

**self** внутри метода екземпляра относится к самому объекту. Оно не используется для вызова методов того же экземпляра класса.

Explain how (almost) everything is an object in Ruby.
Explain what singleton methods are. What is Eigenclass in Ruby?
Describe Ruby method lookup path.
Describe available Ruby callbacks. How can we use them in practice?
What is the difference between Proc and lambda?

## Biseness application

### What is Rack?  
Rack изначально разрабатывался под вдохновением от пайтоновского wsgi и быстро стал фактически application/server — интерфейсом для всего сообщества Ruby — программистов благодаря своей простоте и перфекционизму создателей.

Rake это язык сборки Ruby. Его имя происходит от «Ruby’s make».
Rake — инструмент для автоматизации сборки программного кода, написаный на Ruby
Rails использует Rake для автоматизации связанных с приложением заданий, к примеру операций с базой данных, тестами и т.д.
Rack предоставляет минималичтичный, модульный и адаптируемый интерфейс для разработки веб приложений на языке программирования Ruby (ничего не понятно, правда?). Вместе с оберткой HTTP-запросов и ответами в простейший возможный способ, он красиво объединяет в себе API для взаимодействия с веб серверами, веб фреймворков и приложений написанных без использования фреймворков, а также программы, находящиеся между двух лагерей (так называемое middleware) в единый вызов метода.
Rack — фреймворк для создания своего собственного фреймворка.
Rack предоставляет интерфейс взаимодействия различных веб серверов и вашего фреймворка / приложения. Делая взаимодействие вашего приложения с различными веб серверами, поддерживаемыми rack (Phusion Passenger, LiteSpeed, Mongrel, Thin, Ebb, Webrick — вот названия некоторых), очень простым.
Rack позволяет вам сразу браться за дело благодаря абстрагированию от сервера. Вы свободно получаете запрос, ответ, куки, парметры и сессии без специальной адаптации приложения к какому-либо серверу.

### Explain the Rack application interface.  

Чтобы увидеть список всех rake-заданий для вашего приложения, можно выполнить rake --tasks.
rake routes показывает все ваши указанные маршруты.

### Write a simple Rack application.  

Rack middleware - это больше, чем "a way to filter a request and response"-это реализация шаблона проектирования конвейера для веб-серверов, использующих Rack .

Он очень четко отделяет различные этапы обработки запроса - разделение проблем является ключевой целью всех хорошо разработанных программных продуктов.

'''ruby
# rakefile.rb
task :default do
puts "Hello World!"
end
'''

How does Rack middleware works?  

Прежде всего, Rack-это ровно две вещи:
A webserver соглашение об интерфейсе
В gem

## Ruby jems

What is RubyGems? How does it work?  

Это специальные модули которые позволяют расширить функциональность приложения добавляя новые методы и модули. Они позволяют также работать с базой 
How can you build your own Ruby gem?
Explain the structure of a Ruby gem.
Can you give me some examples of your favorite gems besides Ruby on Rails?

## English part

1. What is the name of institute where you work now?

IPMMS Institute of Problem Mathematic Machines and System.

2. What do you do, what is the title  of you dissertation?

Information technoogy for identification of sources of accidental emissions of air pollution. After Chornobel disaster, into air have been extractic radioactive element like jod and cezium and stroncium. This radioactive elemen can present in air or soil for many years. So our research is about founding the resource of air pollution, having the date from meteo station from the all Ukrainial or even Europiand open data. 

3. What Ruby programming language can be used for?

For many purpose. The main idea is create web application using Ruby on Rails framework but it can be used for create and managing task inside Linux system, Mac OS have homebrew packet manager for work with almost all developer stack on Mac OS.  
