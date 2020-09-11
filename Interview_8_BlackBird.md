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

3. При команде ps ax, как по умолчанию сортируются процессы?

4. Какой лучший способ вытянуть данные сразу из нескольких таблиц?

## English part

1. What is the name of institute where you work now?

2. What do you do, what is the title  of you dissertation?

3. What Ruby programming language can be used for?