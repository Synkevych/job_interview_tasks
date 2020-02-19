# What ? Java inside the Fron-End part ? 

## In some projects, the server part is made in Java, therefore this repository has this file with basic explanations of the Java language.

## Аплеты 
Это программа Java работающая под управлением Web-браузера. Основная проблема – разные браузеры подддерживают разные версии языка Java. 

Java стала популярным языком для разработки приложений серверной стороны, которые генерируют Web-страницы и подерживают логику заднего плана.

Промежуточный код который генерирует JVM можно выполнять н любой машине имеющий соответствующий интерпретатор. 

Основа языка C++ а не Pascal.  

Проект по созданию приставок не принес разработчикам ничего. И в 1994 году они занялись разработкой браузера на собственном языке. 

Слоган - Write Once, Run Anywhere.

Java Аплеты очень надежны - их невозможно сломать;

Аплет может модифицировать только свою ограниченную область отображения. 

 Java Development Kit

jdk 
- bin 	Компилятор и инструментальные средства
- demo 	домонстрационные программы 
- docs	документация 
- includes	файлы для создания платформенно-ориентированых методов
- jre	файлы среды исполняющей системы Java
- lib	Файлы библиотек
- src 	Исходные тексты библиотек 

javac - компилятор с файла java в файл class

# Основные конструкции языка Java
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

Типы переменных 
- char 
- boolean
- double 
- int 
- long 

Преобразование с double в int 
```java 
double x = 9.991;
int nx = (int)Math.round(x); // 10
int nx2 = (int)x; // 9 
``` 

```java
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

## Referense type: date, object, array 

```java
public class Main { 
	public static void main(String[] args){
		// to create ref type we shoud instantiate this variable 
		// создать екземпляр класса
		Date now = new Date();
		now.getTime();
		Point newPoint = new Point(1, 2);
		Point point2 = newPoint; // here we copy reference to an object in memory 
		int[] numbers = new int[5];

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
**Arguments** are the actual value that we pass to these methods 


# What word *Thread* mean ? 
```java
Thread t = new Tread(new ParseFiles(dialog, files));
t.start();
``` 

#What arrow <> brackets mean ? 
```java 
 final List<ProjectInfo> allProjects = ClientApplication.getInstance().getProjectStored(false);
``` 