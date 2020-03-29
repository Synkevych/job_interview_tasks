# What ? Java inside the Fron-End part?

> In some projects, the server part is made in Java, therefore this repository has this file with basic explanations of the Java language.
> Java стала популярным языком для разработки приложений серверной стороны, которые генерируют Web-страницы и подерживают логику заднего плана.
> Аплеты: Это программа Java работающая под управлением Web-браузера. Основная проблема – разные браузеры подддерживают разные версии языка Java.
> Промежуточный код который генерирует JVM можно выполнять н любой машине имеющий соответствующий интерпретатор. 
> Основа языка C++ а не Pascal.
> Проект по созданию приставок не принес разработчикам ничего. И в 1994 году они занялись разработкой браузера на собственном языке.
> Слоган - Write Once, Run Anywhere.
> Java Аплеты очень надежны - их невозможно сломать;
> Аплет может модифицировать только свою ограниченную область отображения.

## Fundamental Concepts

- Object-oriented language
- Objects have states and behaviors(methods)
- Class - describes the behaviors/states that object of its type support
- Class can contain _Local variables_, _Instance variables_, _Class variables_
- Local variables - defined inside methods, constructors or blocks
- Local variables will be declared and initialized within the method and destroyed when they has completed
- Instances variables outside any methods are initialized when the class is instantiated, can be accessed from method, constructor or blocks of that particular class
- Class variables - declared outside any method, with the static keyword
- Every class has a constructor
- Referense type: date, object, array

Java Development Kit (jdk):

- bin - Компилятор и инструментальные средства
- demo - домонстрационные программы
- docs - документация
- includes - файлы для создания платформенно-ориентированых методов
- jre - файлы среды исполняющей системы Java
- lib - Файлы библиотек
- src - Исходные тексты библиотек

javac - компилятор с файла java в файл class

```java
public class FirstSample
{
    public static void main(String[] args)
    {
        // comment
        System.out.println("We will not use 'Hello, World!'");
        /**
        * Next type
        * of comment
        */
    }
}
```

- **public** модификатор доступа 
- **class** все елементы Java находятся в составе класов "контейнеров"
- **main** метод должен быть объявлен как public, является объязательным
- **static**
- **void** показывает что вызываемый метод ничего не возвращает
- **final** константа

Java - строго типизированный язык. В нем есть **8** основных или простых типов, 4 целые числа, 2 действительные с плавающей точкой, 1 - символы и логический.

- int
- short
- long
- byte
- float
- double
- положительная/отрицательная бесконечность
- NaN (0/0) Double.isNaN(x)ghjrewqdewq

Типы переменных:

- char
- boolean
- double
- int
- long

### Пример преобразование с double в int

```java
double x = 9.991;
int nx = (int)Math.round(x); // 10
int nx2 = (int)x; // 9

public static void main(String[] args){
    byte age = 30;
    byte userAge = age; // here we copy the value
    age = 0;
    // we can use underscore
    long viewCount = 3_123_456_789;
    // add L/l to  show that it's long type
    long viewCount = 3_123_456_789L;
    // f  - for float
    float price = 10.99f;
    char letter = 'A'; // for letter -  singe quote
    chat word = "Banan";
    boolean isTrue = false;
```

```java
public class Main {
    public static void main(String[] args){
        // to create ref type we shoud instantiate this variable 
        // создать екземпляр класса
        Date now = new Date();
        now.getTime();
        Point newPoint = new Point(1, 2);
        Point point2 = newPoint; // here we copy reference to an object in memory
        // a single dimensional array  
        int[] numbers = new int[5];
        // multi-dimensional arrays
        int[][] = { {1,2,3}, {4,5}}

        // to print array use Array method 
        System.out.println(Arrays.toString(numbers))
        int [] numbers2 = { 1,2,4,1,41}
        Array.sort(numbers2);
    }
}
```

String are reference types in Java! and immutable so the method returns new string

```java
String message = "This is string" + "!";
```

**Parameters** are the holes that we define in our methods;
**Arguments** are the actual value that we pass to these methods;

- What word *Thread* mean ?

```java
Thread t = new Tread(new ParseFiles(dialog, files));
t.start();
```

- What arrow <> brackets mean ?

```java
 final List<ProjectInfo> allProjects = ClientApplication.getInstance().getProjectStored(false);
```

- What means public <abstract> class ?

- Implicit casting || automatic converting

```java
public class Main {
    public static void main(String[] args){
        //Implicit casting [неявное преобразование типа]
        // byte > short > int > long > float > double
        short x = 1;
        int y = x + 2;

        // whe way of creating constant
        final float PI = 3.14F;
        System.out.println(result);
        String x = "1";
        int y = Integer.parseInt(x) + 2;
        String x2 = "1.2";
        Double.parseDouble(x)
    }
}
```

- The Math class  > java.lang package

- NumberFormat factory method to Number format curency

```js
NumberFormat  currency = NumberFormat.getCurrencyInstance();
String result currency.format(123441.896);
//cheaning method together
String result = NumberFormat.getPercentInstatnce().format(0.1)
```

- variable length arguments

```java
public class Program{

public static void main (String args[]){
    sum(1,2,3);
    sum();
    sum(5,6,7,8,9);
}
    static void sum(int ...nums){
        // ... summarize that we can pass only one or more arguments 
        int result = 0;
        for(int n : nums)
            result += n;
        System.out.println(result);
    }
}
```

## operator // return //

```java
 public static void main (String args[]){

        System.out.println(daytime(7));     // Good morning
        System.out.println(daytime(13));    // Good after noon
        System.out.println(daytime(18));    // Good evening
        System.out.println(daytime(2));     // Good night
    }
    static String daytime(int hour){

        if (hour >24 || hour < 0)
            return "Invalid data";
            // not just returning a value but terminating the function
        else if(hour > 21 || hour < 6)
            return "Good night";
        else if(hour >= 15)
            return "Good evening";
        else if(hour >= 11)
            return "Good after noon";
        else
            return "Good morning";
    }
}
```

- Method overloading
Определение нескольких методов с одним именем но разными типами / количеством параметров

```java
public class Program{

    public static void main(String[] args) {

        System.out.println(sum(2, 3));          // 5
        System.out.println(sum(4.5, 3.2));      // 7.7
        System.out.println(sum(4, 3, 7));       // 14
    }
    static int sum(int x, int y){

        return x + y;
    }
    static double sum(double x, double y){

        return x + y;
    }
    static int sum(int x, int y, int z){

        return x + y + z;
    }
}
```

- Рекурсивная функция

```java
static int factorial(int x){
    if (x <= 0) { return false; }
    if (x == 0 ) { return 0; }
    if (x == 1){
        return 1;
    }
    return x * factorial(x-1);
}
// or 
 int result = 1;
    for (int i = 1; i <= x; i++)
    {
        result *= i;
    }
    return  result;
```

- Override - переопределение, переписывание уже сущ. класса

- Overload - перегрузка, переписывание класса с другим набором параметров/аргументов

- try...catch...finally, можно определять несколько catch

```java
try{
    int[] numbers = new int[3];
    numbers[4]=45;
    System.out.println(numbers[4]);
}
catch(Exception ex){

    ex.printStackTrace();
}
catch(NumberFormatException ex){

    System.out.println("Ошибка преобразования из строки в число");
}
System.out.println("Программа завершена");
```

- thorow - оператор, с которым мы сами можем создать исключение и вызвать его в процессе выполнения.

```java
if(x>= 30){
    throw new Extenion ("Число х должно быть меньше 30");
}
catch (Exception ex){
    System.out.println(ex.getMessage());
}
```

- Классы это шаблон, например человек, реальный человке – экземпляр класса есть объектом даного класса.

```java
class Person{

    // конструктор - спец. метод
    String name;
    int age;

// можем также исп. инициализаторы
// выполняются до конструктора, общий для всех констр. 
{
    name = "Undefined";
    age = 18;
}

    Person(){ // определение новог. констр. без агрнументов
        name = "Undefined";
        age = 18;
    }
    Person(String n){
        // можем использвать this
        // this(name, 18);
        name = n;
        age = 18;
    }
    Person(String n, int a){
        name = n;
        age = a;
    }
    void displayInfo(){
        System.out.printf("Name: %s \tAge: %d\n", name, age);
    }
}

  public static void main(String[] args) {
         Person tom = new Person(); // создание объекта, вызов конструктора без параметров
         tom.displayInfo();

         tom.name = "Tom";
         tom.age = 34;
         tom.displayInfo();

         Person bob = new Person("Bob"); // вызов констр. с 1 параметром
         bob.displayInfo();
}
```

- В Java классы объединяються в пакеты
package название_пакета;

- Static variable is common for all instances of the class
- Static модификатор делает переменную независимыми от объекта, мы можем вызывать этот метод без создания екземпляра класса, и не можем его переопределять внутри класса-наследника.  

- Final variable cannot change once set

- StringBuilder - have many methods to work with the Strings
- toString Method - System.out.print() automatic transform all to string
