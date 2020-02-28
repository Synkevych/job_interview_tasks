
nil value = null on JavaScript 
nil => false

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

## Методы могут быть определены с помощью def иметь параметры и возв. значения 
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
How to use operator if
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

Two methods

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

## Use Class on Ruby, :attr - atribute 
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
## Acessors vs Variables
Снаружи класса мы используем аксессоры:

blurb.time = Time.now

но внутри мы используем переменные объекта:

@time = Time.now

## New Full app on the Ruby 
```ruby 
class Blurbalizer
  def initialize(title)
    @title = title
    @blurbs = [] 
    
  end
  
  def add_a_blurb(mood, content)
    # << this means add to the end of array 
    @blurbs << Blurb.new(mood, content)
  end
  
  def show_timeline
    puts "Blurbbify: #{@title} has #{@blurbs.count} Blurbs"
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

# or the other class 
class Blurb
  attr_accessor :content, :time, :mood

  def initialize(mood, content="")
    @time    = Time.now
    @content = content[0..39]
    @mood    = mood
  end

  def moodify
    if    @mood == :sad
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

myapp.show_timeline
```
## zetcode example 
```ruby 
bool = [true, false]

male = bool[rand(2)]

if male
    puts "We will use name John"
else 
    puts "We will use name Victoria"
end
```