# Ruby on Rails questions

### Easy

### How do you define a global variable, an instance variable, a class variable, and a local variable?

- глобальная переменная объявляется с помощъю знака `$` доступна во всем приложении, желательно избегать их
- переменная екземпляра класса `@` доступна после объявления экземпляра класса в контексте выполнения(объявлена в контроллере доступна в отображении)
- `@@` - переменная класса, доступна в самом классе
- обычная, локальная переменная объявляется без дополнительных симаолов, доступна до ключевого слова `end`

### Does Ruby have primitives?

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

What does a ||= 5 in Ruby do?
How do you define a class method in Ruby?
What is a symbol in Ruby?
What does ! mean in method names in Ruby?
How do you catch an exception in Ruby?
What is a code block in Ruby?
What is duck typing?
True or false: Ruby is pure object-oriented language and everything appears to Ruby as an object.
What's the difference between public, private, and protected?

### Medium

Does Ruby pass by value, reference, or other?
What's the difference between and and && in Ruby?
How do you define a constant in Ruby (hint: all uppercase characters is wrong)?
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
Find the problem with this code example.
How would you call a private method outside of a class if needed?

### Hard

What's the difference between raise and throw?
How do you create a global threadsafe value?
What's the difference between alias and alias_method besides the comma (hint: think overriding)?
What's an eigenclass or metaclass in Ruby?

### Как защитится от подделки межсайтовых запросов и токена (CSRF атаки)

Стандартные формы в Рельсах имеют от этого защиту встроеную, для кастомных можно использовать:

<head>
  <%= csrf_meta_tags %>
</head>