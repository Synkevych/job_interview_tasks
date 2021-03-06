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
* Metaprogramming - программы меняют себя во время выполнения (самомодифицирующийся код)
* Cleand and Simple Syntax

```ruby
# Metaprogramming example
# There were some methods for running dynamically generated code

# Object#send
Array.send(:define_method, :ducky) { puts 'quick! quick!' }
p [].ducky # quick! quick!

# Object#instance_eval, get the average of an array of integers
[1,2,3,4].instance_eval { inject(:+) / size.to_f } # returns 2.5
[1,2,3,4].instance_eval('size') # returns 4

# Module#module_eval
Fixnum.module_eval do
  def to_word
    if (0..3).include? self
      ['none', 'one', 'a couple', 'a few'][self]
    elsif self > 3
      'many'
    elsif self < 0
      'negative'
    end
  end
end
1.to_word # returns 'one'
2.to_word # returns 'a couple'

# Kernel#method_missing, handle the absence of a method depending on the name instead of getting the default result
class Fixnum
  def method_missing(meth)
    method_name = meth.id2name
    if method_name =~ /^multiply_by_(\d+)$/
      self * $1.to_i
    else
      raise NoMethodError, "undefined method `#{method_name}' for #{self}:#{self.class}"
    end
  end
end

16.multiply_by_64 # returns 1024
16.multiply_by_x # NoMethodError


# define_method 
class Array
  define_method(:multiply) do |arg|
    collect{|i| i * arg}
  end
end

[1,2,3,4].multiply(16) # returns [16, 32, 48, 64]
```

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

* global variables begin with **$** 
* local variables begin with a **lowervase letter or an underscore**
* class variables begin **@@** and are shared by all instances of the class that it is defined in
* instance vatiables begin with **@** and are similar to class variables exept that they are local to a single instance of a class in which they are instantiated

### Name three levels of access control for Ruby methods

* public - default value
* private -  приватный метод нельзя вызвать на объекте явно (в т.ч. на self), может быть вызван только неявно на self экземплярами класса или его подклассов.
* protected - only accessible within their defining class and its subclasses

```ruby
# protected
class C
  protected
  def protected_m; 'hello'; end
end

class D < C
  def m; C.new.protected_m; end
end

D.new.m # ==> 'hello'
C.new.protected_m # ==> error
```

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

rebese - позволяет взять все коммиты из одной ветки и в том же порядке применить их к другой ветке.

### 3. Что делает команда `git cherry-pick`

Она берет изменения с одного коммита и применяет их в виде нового коммита к текущей ветки.

### 4. Как работает протокол передачи HTTP

Протокол передачи даннных прикладного уровня HTTP работает повех TCP/IP используется для передачи произвольных данных. Каждое сообщение состоит из 3 частей: стартовая строка, заголовок и сообщение.

### Лямбды, Блоки и Proc используются в Руби для работы с замыканием

* proc - объект, который можно сохранить в переменную, от не имеет ограничения по количеству аргументов, у него можно хранить функцию, **return** останавливает выполнение метода

 ```ruby 
square = Proc.new {|x| x**2 }
proc2 = proc {|x| x**2 } # shorthand of new - Kernel#proc

square.call(3)  #=> 9
square.(3)      #=> 9
square[3]       #=> 9

p = proc {|x, y| "x=#{x}, y=#{y}" }
p.call(1, 2)      #=> "x=1, y=2"
p.call([1, 2])    #=> "x=1, y=2", array deconstructed
p.call(1, 2, 8)   #=> "x=1, y=2", extra argument discarded
p.call(1)         #=> "x=1, y=", nil substituted instead of error
 ```
* labmda - является элементом класса Proc, проверяет количество аргументов которые в нее передаются, **return** завершает выполнение кода внутри нее код метода который ее вызвал продолжает работать
```ruby
lambda1 = lambda { |x| x**2 } 
lambda2 = ->(x) { x**2 } #shorthand

l = lambda {|x, y| "x=#{x}, y=#{y}" }
l.call(1, 2)      #=> "x=1, y=2"
l.call([1, 2])    # ArgumentError: wrong number of arguments (given 1, expected 2)
l.call(1, 2, 8)   # ArgumentError: wrong number of arguments (given 3, expected 2)
l.call(1)         # ArgumentError: wrong number of arguments (given 1, expected 2)
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

### What is a class

Элемент ПО который описывает абстрактный тип данных и его частичную или полную реализацию.
Клас это каркас из которого создаются объекты. Объекты - являются экземплярами класа которая способна сохранять свое состояние и обеспечивающая набор операций для проверки и изменения этого состояния(состояние объекта харастеризируется значениями его атрибутов).
Например, Животное является класом, а птицы, рыбы, рептилли экземпляры этого класа.

```ruby
class Animal

  # class variables
  @@lungs = true
  @@number_of_legs = 4
end
```

### What is the difference between a class and a module

Модули в Руби похожи на классы в том, что они содержат набор методов и констанат, другие модули и определения классов. В отличии от класов нельза создать новый екзепляр на основе модуля, модуль не может иметь подклассы.

### What is an object

В руби любая закорючка – это объект какого-то класса.  Эсть много разных типов объектов, массивы, метки, даты, целые числа, строки. Благодаря наследованию от нужного объекта мы получим все методы для работы с этим класом, также это позволять понять что это за класс и понять что с ним можно слелать.

Посмотреть класс любого объекта можно вызвав у этого объекта по цепочке методы **.class** и **.name**.

### How would you declare and use a constructor in Ruby

Конструктор используется для инициализации состояния объекта.
Способ создания объектов в Ruby — вызов метода new в классе, фактически это вызывает метод initialize.

Метод initialize в Ruby — это специальный метод, который действует как конструктор, как мы увидим в примере ниже.

```ruby
class Person
  def initialize (name, age) # Конструктор
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

### How would you create getter and setter methods in Ruby

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

### Describe the difference between class and instance variables

Разница в области видимости, **@name** - переменные экземпляра класса, **@@name** - переменные самого класса

What are the three levels of method access control for classes and what do they signify?

### What does ‘self’ mean

**self** внутри метода екземпляра относится к самому объекту. Он не используется для вызова методов того же экземпляра класса.

Explain how (almost) everything is an object in Ruby.
Explain what singleton methods are. What is Eigenclass in Ruby?
Describe Ruby method lookup path.
Describe available Ruby callbacks. How can we use them in practice?
What is the difference between Proc and lambda?

## Biseness application

### What is Rack

Rack изначально разрабатывался под вдохновением от пайтоновского wsgi и быстро стал фактически application/server — интерфейсом для всего сообщества Ruby — программистов благодаря своей простоте и перфекционизму создателей.

Rake это язык сборки Ruby. Его имя происходит от «Ruby’s make».
Rake — инструмент для автоматизации сборки программного кода, написаный на Ruby
Rails использует Rake для автоматизации связанных с приложением заданий, к примеру операций с базой данных, тестами и т.д.
Rack предоставляет минималичтичный, модульный и адаптируемый интерфейс для разработки веб приложений на языке программирования Ruby (ничего не понятно, правда?). Вместе с оберткой HTTP-запросов и ответами в простейший возможный способ, он красиво объединяет в себе API для взаимодействия с веб серверами, веб фреймворков и приложений написанных без использования фреймворков, а также программы, находящиеся между двух лагерей (так называемое middleware) в единый вызов метода.
Rack — фреймворк для создания своего собственного фреймворка.
Rack предоставляет интерфейс взаимодействия различных веб серверов и вашего фреймворка / приложения. Делая взаимодействие вашего приложения с различными веб серверами, поддерживаемыми rack (Phusion Passenger, LiteSpeed, Mongrel, Thin, Ebb, Webrick — вот названия некоторых), очень простым.
Rack позволяет вам сразу браться за дело благодаря абстрагированию от сервера. Вы свободно получаете запрос, ответ, куки, парметры и сессии без специальной адаптации приложения к какому-либо серверу.

### Explain the Rack application interface

Чтобы увидеть список всех rake-заданий для вашего приложения, можно выполнить rake --tasks.
rake routes показывает все ваши указанные маршруты.

### Write a simple Rack application

Rack middleware - это больше, чем "a way to filter a request and response" - это реализация шаблона проектирования конвейера для веб-серверов, использующих Rack.

Он очень четко отделяет различные этапы обработки запроса - разделение проблем является ключевой целью всех хорошо разработанных программных продуктов.

```ruby
# rakefile.rb
task :default do
puts "Hello World!"
end
```

How does Rack middleware works?  

Прежде всего, Rack-это ровно две вещи:
* A webserver соглашение об интерфейсе
* В gem

## Ruby jems

* What is RubyGems? How does it work?

Это специальные модули которые позволяют расширить функциональность приложения добавляя новые методы и модули. Они позволяют также работать с базой

* How can you build your own Ruby gem?

Модуль, следует положить в папку lib/
В корне проекта создаем Gemfile и прописываем там версию ruby и необходимые зависимости.
Юнит тесты должны быть в папке test/ или spec/
Прописываем стандартный .gitignore и коммитим наш код, пушим на гитхаб.
Создаем файл с описанием гема GEM_NAME.gemspec куда прописываем всю необходимую информацию включая название, описание, версию, ссылки, зависимости, и файлы.
Пробуем собрать свой гем:

```ruby
$ gem build meta_information.gemspec
Successfully built RubyGem
  Name: meta_information
  Version: 1.0.1
  File: meta_information-1.0.1.gem
```

Aвторизовываемся в rubygems.org, и опубликовать его.

* Explain the structure of a Ruby gem.

* Can you give me some examples of your favorite gems besides Ruby on Rails?
I know a lot of them: device, rspesc_rails, capystrano, will_paginate, sidekiq, factory_bot_rails, faker.

## JavaScript

Как работает *prototype* ? 

```js
function User() {}
User.prototype = { admin: false }

let user = new User(); // user.admin = false 

User.prototypr = { admin: true } // Мы изменили прототип юзера но не созданого от него юзера

user.admin // user.admin = false  
```

## English part

1. What is the name of institute where you work now?

IPMMS Institute of Problem Mathematic Machines and System.

2. What do you do, what is the title of you dissertation?

Information technoogy for identification of sources of accidental emissions of air pollution. After Chornobel disaster, into air have been extractic radioactive element like jod and cezium and stroncium. This radioactive elemen can present in air or soil for many years. So our research is about founding the resource of air pollution, having the date from meteo station from the all Ukrainial or even Europiand open data.

3. What Ruby programming language can be used for?

For many purpose. The main idea is create web application using Ruby on Rails framework but it can be used for create and managing task inside Linux system, Mac OS have homebrew packet manager for work with almost all developer stack on Mac OS.  
