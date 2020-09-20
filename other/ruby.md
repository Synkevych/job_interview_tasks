# Ruby basic knowledge  

### Why Ruby ?

    * Киллер фича Ruby на фоне другиг языков: Лучший друг програмиста.  
    * Лучший язык для начала в ИТ програмирования - английский.
    * Нет объявления переменных, скобок, слова return, и т.д

### How to become Junior Ruby Developer 
    * Пройти курс онлайн или офлайн 
    * Понимать что происходит когда ты вводиш поисковый запрос  
    * Book: Язык програмирования Ruby, Ю. Мацумото  
    * Book: Ruby Under a Microscope  

### Data type

- Booleans
- Symbols
- Numbers
- Strings
- Arrays
- Hashes

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

``` \ruby
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

### Как защитится от подделки межсайтовых запросов и токена (CSRF атаки)

Стандартные формы в Рельсах имеют от этого защиту встроеную, для кастомных можно использовать: 

<head>
  <%= csrf_meta_tags %>
</head>

> nil value = null on JavaScript 
> nil => false

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
