# Ruby basic knowledge  

## Ruby интерпретируемый, полностью объектно-ориентированный язык программирования с четкой динамической типизацией

### Why Ruby

    * Киллер фича Ruby на фоне другиг языков: Лучший друг програмиста.  
    * Лучший язык для начала в ИТ програмирования - английский.
    * Нет объявления переменных, скобок, слова return, и т.д

### Data type

- Booleans
- Symbols
- Numbers
- Strings
- Arrays
- Hashes

### Easy

### How do you define a global variable, an instance variable, a class variable, and a local variable?

- глобальная переменная объявляется с помощъю знака `$` доступна во всем приложении, желательно избегать их
- переменная екземпляра класса `@` доступна после объявления экземпляра класса в контексте выполнения(объявлена в контроллере доступна в отображении)
- `@@` - переменная класса, доступна в самом классе
- обычная, локальная переменная объявляется без дополнительных симаолов, доступна до ключевого слова `end`

### Does Ruby have primitives?

Примитив (значение примитивного типа, примитивный тип данных) это данные, которые не являются объектом и не имеют методов.
Чаще всего значение примитивного типа представлено в низкоуровневой реализации языка.

Все примитивы неизменяемы (immutable), то есть они не могут быть изменены. Важно не путать сам примитив с переменной, которой присвоено значение примитивного типа. Переменной может быть переприсвоено новое значение, но существующее значение примитивного типа не может быть изменено подобно объектам, массивам и функциям.

Примитивов в Ruby нет, любая сущность является Object.
Примитивы есть в JavaScript:  string, number, boolean.

```ruby
number = 1
string = 'word'
boolean = true
p number.class  # Integer
p string.class  # String
p boolean.class # TrueClass
```

### What does a ||= 5 in Ruby do?

оператор ||= выполняет логическое действие ИЛИ между правой и левой частями.

Если первая часть — правдива (вычисляется как true), то не важно, какое значение во второй части и наоборот, если в первой части что-то ложное (nil или false), то надо посмотреть, что во второй части.

Проверят значение a, если оно пустое(значение `nil`, `false`,) то присвоить ему значение 5.

### How do you define a class method in Ruby?

Mercedes = new Car

### What is a symbol in Ruby?

Символы лучше всего сравнить с уникальными идентификаторами. Символ это скорее сам знак, а не то, что он означает. Метод object_id возвращает уникальный идентификатор объекта.

### What does ! mean in method names in Ruby?

Опасный метод который модифицирует сам обект, они изменяют состояние, на которое у кого-то еще может быть ссылка.
В Rails восклицательный знак часто означает, что метод будет выдавать исключение при сбое, а не отказывать молча.

### How do you catch an exception in Ruby?

Исполнени и исключения работают вместе. Программа останавливается, если возникает исключение. Таким образом, исключения используются для обработки различных типов ошибок, которые могут возникать во время выполнения программы, и необходимо предпринимать соответствующие действия, а не полностью останавливать программу.

- rescue - механизм отказа от выполнения, когда что-то идет не так
- raise
- Catch и Throw - приятно выпрыгнуть из какой-то глубоко вложенной конструкции во время нормальной обработки
- класс Exception - Все классы исключений образуют иерархию с классом Exception в верхней части, содержит семь разных типов

```ruby
rescue OneTypeOfException

# syntax
begin
 #Исключения в этом коде
 #поймал следующий пункт rescue
rescue
   # Этот блок будет захватывать Все типы исключений
   retry  # Это переместит управление в начало <i>begin</i>
end

raise "Error Message"

raise ExceptionType, "Error Message"

```

### What is a code block in Ruby?

Блок является одной из ключевых конструкций языка Ruby, которую необходимо хорошо понимать и любить, поскольку использование блоков, наряду с грамотным именованием всех идентификаторов (переменных и т. д.) и вызовами методов по цепочке, делает ваш код читаемым настолько, насколько может быть читаема хорошая инструкция на английском.


### What is duck typing?

Утиная типизация - ее принцип состоит в том, что если некий объект «ходит как утка и крякает как утка» значит он — утка. Подобие объекта чему-либо проверяется наличием методов с нужными именами и сигнатурами, то есть наличие у объекта подходящего метода более важно, чем наследование класса объекта от некоторого базового класса.

### True or false: Ruby is pure object-oriented language and everything appears to Ruby as an object.

True, ruby Ruby is a pure object-oriented language and everything appears to Ruby as an object. Every value in Ruby is an object, even the most primitive things: strings, numbers and even true and false. Even a class itself is an object that is an instance of the Class class.

### What's the difference between public, private, and protected?

**public**

**private** - приватный метод нельзя вызвать на объекте явно (в т.ч. на self), он может быть вызван только неявно на self экземплярами класса или его подклассов

**protected** - можно вызвать явно, но только из контекста (метода, например) объекта, который является экземпляром того же класса или его подкласса.

### Medium

### Does Ruby pass by value, reference, or other?

### What's the difference between and and && in Ruby?

### How do you define a constant in Ruby (hint: all uppercase characters is wrong)?

На самом деле константы не контсанты, если поменят значение константы это выдаст предупреждение но не остановит программу. 
Для того чтобы запретить изменение объекта можно использовать метод freeze. Для проверки Object#frozen?.

How do you check if a class inherits another class?
Name at least two days to define a class.
What's the difference between a lambda and a proc (hint: think return)?
What does a Struct do?
What's the difference between super and super()?
What's the difference between a module and a class? When would you use one or the other?
What does ampersand (&) do before a symbol (e.g. users.map(&:name))?
Name two ways you can write a method that takes a code block.
What is the Set class for in Ruby?
How do you define the default value for a Hash?
How do you define a way to order and sort instances of a particular class?
How would you call a private method outside of a class if needed?

What's the difference between raise and throw?
How do you create a global threadsafe value?
What's the difference between alias and alias_method besides the comma (hint: think overriding)?

### What is Rake

Rake – це схожий на Make інструмент для Ruby-розробників, який дозволяє виконати певну частину коду, коли це потрібно.  
Инструмент для автоматизации сборки программного кода, часто мы используем его для создания базы данных, прогона миграций и т.п.

### What is Rack

Усі веб-сервери Ruby використовують технологію Rake, інструмент для обробки HTTP-запитів, який базується на принципі middleware.  
Rack - это интерфейс, который создан, чтобы обеспечить минимальное API для подключения веб-серверов поддерживающих Ruby (WEBrick, Mongrel и т.д.) и веб-фреймворками (Rails, Sinatra и др.). В нем реализован базовый функционал для работы с HTTP протоколом: утилиты для парсинга, классы Response, Request, Session и многое другое.

Вернемся к абстрактным вещам. Если проанализировать взаимодействие сервера и клиента, то можно обнаружить 3 ключевых аспекта: статус запроса, заголовки и тело. Именно это и стало фундаментом Rack Application.
Rack содержит набор полезных утилит и 3 важнейших для любого web приложения класса: Response, Request и Session.

> Rack::Response предоставляет интерфейс, который упрощает создание ответа клиенту. Позволяет устанавливать заголовки, куки и создавать тело ответа.
> Класс Rack::Request более интересен, он предоставляет интерфейс для доступа к переменным запроса и упрощает работу с загружаемыми файлами. В качестве единственного параметра для инициализации принимает хеш переменных среды. Умеет делать множество полезных вещей: проверять тип запроса (Head, Delete, Options, Get, Post, Put), парсить QUERY_STRING в хеш, читать куки, возвращать базовый URL, узнать referer или user_agent.
> Rack::Session реализован, как функционально-независимая часть и предоставляет 3 адаптера для хранения: в куках, в мемкэш сервере и обычный HashPool. Первый не рекомендуется использовать на продакшен серверах в целях безопасности, но вполне годится для девелопмента. К сессии можно обратится через экземпляр класса Rack::Request при помощи метода session, который представляет собой простой хеш.

### Как использовать Regular Expressions

```ruby
if "Hi there, i am using gfg" =~ /hi/
  p "math"
else
  p "not match"
end
# return not match

if "hi there".match(/hi/)
    puts "match"
end

# declaring a function which checks for vowel in a string 
def contains_vowel(str)
  str =~ /[aeiou]/
end
```

### Как будет называется таблица после создания модели Answer в RoR

> create_table "answers"

### Как подключить js код внутри view

> javascript_include_tag 'sources'

New dictionary => Hash.new

```ruby
def tame( number_of_shrews )
  number_of_shrews.times {
    puts "Tamed a shrew"
  }
  return number_of_shrews
end

puts tame(3)
```

### Методы могут быть определены с помощью def иметь параметры и возв. значения

```ruby
s = get_shakey

s["William Shakespeare"].each { |key, val|
  puts val["title"]
  }
```

show the books from to year

```ruby
def print_plays(year_from, year_to)
  get_shakey["William Shakespeare"]
    .select { |k, v|
      year_from <= v["finished"] &&
      year_to   >= v["finished"]
    }.each { |k, v|
      puts "#{v["title"].ljust(30)} #{v["finished"]}"
    }
end
print_plays(1600, 1615)
```

### How to use operator if

```ruby
if 1<2
  puts "It is true!"
end

# also can be used in the end

puts "This is true: 1 < 2" if 1 < 2 

'xyz'.empty? => false
'abc' == 'def' => false
'a' > 5   #error  comparison of String with Numeric failed

# another sample

a = 0

if  a = 100
  puts "The expression is : #{a}"
else 
  puts "#{a} not equal to 100"
end 
```

### Two methods

```ruby
 def hungry?(time_of_day_in_hours)
  puts "I hungry"
  true
end

def eat_an(what)
  puts "I eat #{what} \n"
end

eat_an 'apples' if hungry?(14)

eat_an 'carrot like rabbit ' if hungry?(10)
```

### Use Class on Ruby, :attr - atribute 

```ruby
class Blurb 
  attr_accessor :content, :time, :mood
end

blurb1 = Blurb.new

puts blurb1

blurb1.content = "Today Mount Was Stolen!"
# let change the atribute 
blurb1.time = Time.now
blurb1.mood = :sick

puts blurb1

# new more useful class 

class Blurb
  attr_accessor :content, :time, :mood
  
  def initialize(mood, content="")
    @time = Time.now
    @content = content[0..39]
    @mood = mood
  end
end

Blurb.new.time #=> return the new class and their time 
# new instance classes with all attribuses 

blurb2 = Blurb.new :confused, "I can't trust, that was a stolen" 
```
### Acessors vs Variables

Снаружи класса мы используем аксессоры:

blurb.time = Time.now

но внутри мы используем переменные объекта:

@time = Time.now

### New Full app on the Ruby 

```ruby
# or the other class 
class Blurb
  attr_accessor :content, :time, :mood

  def initialize(mood, content="")
    @time    = Time.now
    @content = content[0..39]
    @mood    = mood
  end

  def moodify
    if @mood == :sad
      return ":-("
    elsif @mood == :happy
      return ":-)"
    # Добавь другой смайлик сюда
    end

    # Смайлик по умолчанию
    ":-|"
  end
end

class Blurbalizer
  def initialize(title)
    @title  = title
    @blurbs = []
  end

  def add_a_blurb(mood, content)
    @blurbs << Blurb.new(mood, content)
  end

  def show_timeline
    puts "Blurbalizer: #{@title} содержит #{@blurbs.count} Blurbs"

    @blurbs.sort_by { |t|
      t.time
    }.reverse.each { |t|
      puts "#{t.content.ljust(40)} #{t.time}"
    }
  end
end

myapp = Blurbalizer.new "The Big Blurb"

myapp.add_a_blurb :mood,  "Add Blurb here"

myapp.show_timeline
```
### zetcode example 
```ruby 
bool = [true, false]

male = bool[rand(2)]

if male
    puts "We will use name John"
else 
    puts "We will use name Victoria"
end
```
