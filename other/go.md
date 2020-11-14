# Goland

Every Go program is made up of packages, and start running in package main. The package name is the same as the last element of the import path.

Before run code compile to byte-code.

```go
package main

import (
  "fmt"
  "math/rand"
)

func main() {
  fmt.Println("My favorite number is", rand.Intn(100))
}

// the other example

import (
  "fmt"
  "math"
)

func main()2 {
  fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
}

```

### Exported names

Name is exported if it begins with a capital letter. When importing a package, you can refer only to its exported names.

```go
package main

import (
  "fmt"
  "math"
)

func main() {
  fmt.Println(math.Pi)
}
```

### Functions

A functions can take zero or more arguments, the type comes after the variable name. Two or more consecutive named function parameters share a type can omit the type from all but the last.

```go
package main

import "fmt"

func add(x, y int) int {
  return x + y
}

func main() {
  fmt.Println(add(42, 13))
}
```

A function can return any number of results.

```go
func swap(x, y string) (string, string) {
  return y, x
}

func main() {
  a, b := swap("hello", "world")
  fmt.Println(a, b)
}
```

Go's return values may be named, if so they are treated as variables at the top of the function.

```go
func split(sum int) (x, y int) {
  x = sum * 4 / 9
  y = sum - x
  return
}

func main() {
  fmt.Println(split(17))
}
```

Var statement declares a list of variables, as in function argument list, the type is last

```go
var c, python, java bool

func main(){
  var i int
  ftm.Println(i, c, python, java) // 0, false ...
}
```

Variables with initializers, a `var` declaration can include initializers, one per variable, if initializer is present - type can be omitted.

```go
var i, j, int = 1, 2 // the type omitted becouse initializer is present

c, python, java := true, false, "no!" // Short variable declarations

var c, python, java bool // all variable is boolean with "false" value
```

Short variable declaration `:=` can be used in place of a var declaration with implicit type.
Outside a function this not available.

```go
func main(){
  var i, j int = 1, 2
  k := 3
  c, python, java := true, false, "no!"
}
```

Basic types:

- bool
- string
- int, int8, int16, int32, int64
- byte // alias for unit8
- rune // alias for int32
- float32 float64
- complex64 complex128

int, uint, uintptr types are usually 32 bits wide 

```go
var (
  ToBe bool = false
  MaxInt uint64 = 1 <<64 - 1
  z complex128 = cmplx.Sqrt(-5 + 12i)
)
func main(){
  fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
  fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
  fmt.Printf("Type: %T Value: %v\n", z, z)
}
```

### Zero values

variables declered without an explicit initial value are given their zero value, the zero value is: 0, false or ""

Conversation from different type newType(oldType)

### Constants

Declared with `const` keyword can be character, string, boolean, or numeric values. Cannot be used `:-` syntax.

```go
const Country = "Ukraine"

func main() {
  const Truth = true
  fmt.Println("Go rules?", Truth)
  fmt.Println("Hello", Country)
}
```

### Numeric constants - high-precision values

```go
const(
  Big = 1 << 100
  Small = Big >> 99
)
func needInt(x int) int { return x*10 + 1}
```

### Only one looping construct `for`

init statement; the condition expression; the post statement;

```go
func main(){
  sum := 0
  for i := 0; i < 10; i++ {
    sum += i
  }
  fmt.Println(sum)
}
```

`for sum < 1000 {` or `for ; sum < 100; {` syntax are optional

### `if` statement

The `if` statement can start with a short statement to execute before the condition. Those varable available inside any else blocks.

```go
func sqrt(x float64) string{
  if x < 0 {
    return sqrt(-x) + "i"
  }
  return fmt.Sprint(math.Sqrt(x))
}

// second example

func pow(x, n lim float64) int {
  if v := math.Pow(x, n); v < lim{ // declare variable before the condition
    return v
  } else {
    fmt.Printf("%g >= %g/n", v, lim)
  }
  return v
}

func main(){
  fmt.Println(
    pow(3, 2, 10),
    pow(3, 3, 20),
  )
}
```

exercise loops and functions

```go
package main

import (
  "fmt"
  "math"
)

func Sqrt(x float64) float64 {
  z := 1.0
  for i:=0; i<10; i++ {
    var z2 float64
    z2 -= (z*z -x) / (2*z)
    if z == z2 {
      fmt.Println(i, z)
      return z
    } else {
      z -= (z*z -x) / (2*z)
    }
  }
  return z
}

func main() {
  fmt.Printf("Sqrt from 81 = %v\n", Sqrt(81))
  fmt.Printf("Sqrt from math module 9 = %v", math.Sqrt(9))
}
```

### Switch statement

A `switch` statement is a shorter way to write a sequence of `if - else` statements. Switch cases evaluete cases from top to bottom, stopping when a cese succeeeds.
It is also available to use switch with no condition - works like if-then-else chains.

`break` statement provided automatically

```go
func main() {
  fmt.Print("Go runs on ")
  switch os := runtime.GOOS; os { // declaration variable before statement
  case "darwin":
    fmt.Println("OS X.")
  case "linux":
    fmt.Println("Linux.")
  default:
    // freebsd, openbsd,
    // plan9, windows...
    fmt.Printf("%s.\n", os)
  }

// another way

  fmt.Println("When's Saturday?")
  today := time.Now().Weekday()
  switch time.Saturday {
  case today + 0:
    fmt.Println("Today.")
  case today + 1:
    fmt.Println("Tomorrow.")
  case today + 2:
    fmt.Println("In two days.")
  default:
    fmt.Println("Too far away.")
  }
}
```

Switch without a condition is the same as switch `true`.

```go
t := time.Now()
  switch {
  case t.Hour() < 12:
    fmt.Println("Good morning!")
  case t.Hour() < 17:
    fmt.Println("Good afternoon.")
  default:
    fmt.Println("Good evening.")
  }
```

### Deffer

A deffer statement defers the execution of a function until the surrounding function returns.
Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in *last-in-first-out*.

```go
func main() {
  defer fmt.Println("world")

  fmt.Println("hello")
}
// hello
// world
```

### Pointers

A pointer holds the memory address of a value. It's zero value is nil.
`i := 21`
`p := &i` - now p variable is a pointer, it return something like `0x5832e0`
`*p = 56`  - set `i` through the pointer, *p return the i value now it 56

### Structs - like object in other languages

A collection of fields, accessed using a dot

```go
type Vertex struct{
  X int
  Y string
}
func main() {
  v := Vertex{10, 20}
  p := &v
  p.X = 1e9
  fmt.Println(Vertex{1, "Foo"})
  fmt.Println(v.X)
  v1 = Vertex{}  // X:0 and Y:0
  v2 = Vertex{X: 1} // X:1 and Y:0
  p1 = &Vertex{1, 2} // has type *Vertex
  p2 = p1.X // 1 value
}
```

### Arrays

The type [n]T is an array of n values of type T.
Slices like references to arrays – doesn't store any data, just describes a section of an underlying array.

```go
func main(){
  var a [2]string
  a[0] = "Hello"
  a[1] = "Word"
  fmt.Println(a[0], a[1]) // [Hello World]

  primes := [6]int{2, 4, 6, 8, 10, 12} // [2,4,6 ...]

  var s []int = primes[1:4] // [2, 4, 6] - slices of 3 element
  x := primes[0:2]
  y := primes[1:3]
  y[0] := 14 // we change primes[1] from 4 to 14
}
```

A slice literal is like an array literal without the length. They has both of a slice is the number of elements it contains.

```go
q := struct{
  i int
  b bool
}{
  {1, true},
  {2, false}
}
```

Slice length and capacity

`len(x)` and `cap(x)`

Nil slices

```go
func main() {
	var s []int
	fmt.Println(s, len(s), cap(s))
	if s == nil {
		fmt.Println("nil!")
	}
}
```

### Dynamically-sized arrays with `make` function

`a := make ([]int 5) // len(a)=5, cap(a)=5 [0 0 0 0 0]`
`b := make ([]int, 0, 5) //len(b)=0, cap(b)=5 []`, second element is capasity

Appending to a slice - common to append a new elements to a slice.

```go
var s []int

s = append(s, 0)
s = append(s, 1, 2, 3)
```

Range from of the for loop iterates over a slice or map

```go
var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main(){
  for i, v := range pow{
    fmt.Printf("2**%d = %d\n", i, v)
  }
}
```

You can skip the index or value by assigning to _. If you only want the index, you can omit the second variable.

```go
func main() {
	pow := make([]int, 10)
	for i := range pow {
		pow[i] = 1 << uint(i) // == 2**i
	}
	for _, value := range pow {
		fmt.Printf("%d\n", value)
	}
}
```

### Maps - maps keys to values

```go
type Vertex struct {
  Lat, Long float64
}

var m map[string]Vertex

func main() {
  m = make(map[string]Vertex)
  m["Bell Labs"] = Vertex{
    40.68433 -74.39967
  }
}
```

Map literals like struct literals but the keys are required.

```go
var m = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}

m := make(map[string]int)

m["Answer"] = 48
fmt.Println("The value:", m["Answer"])

delete(m, "Answer")
fmt.Println("The value:", m["Answer"])
```

Implement WordCount that counts of each "words" in the string

```go
package main

import (
	"golang.org/x/tour/wc"
)
import (
	"strings"
)

func WordCount(s string) map[string]int {
	return map[string]int{"x": 1}
}

func main() {
	wc.Test(WordCount)
}

func getsSrinng(s string) map[string]int {
	m := make(mape[string])
 	return strings.Fields(s)
}
```

### Function values

Function values may be used as function arguments and return values.

```go
func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}
```
