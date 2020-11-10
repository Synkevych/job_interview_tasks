# Goland 

Every Go program is made up of packages, and start running in package main. The package name is the same as the last element of the import path.

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
var i, j, int = 1, 2

var c, python, java = true, false, "no!"
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

```go
func sqrt(x float64) string{
  if x < 0 {
    return sqrt(-x) + "i"
  }
  return fmt.Sprint(math.Sqrt(x))
}

func pow(x, n lim float64) int {
  if v := math.Pow(x, n); v < lim{
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
	for i:=0; i<10;i++ {
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

`break` statement provided automatically

```go
func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
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

# Defer

A deffer statement defers the execution of a function until the surrounding function returns.
Deferred function calls are pushed onto a stack. When a function returns, its deferred calls are executed in *last-in-first-out*.

```go
func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}
```

### Pointers

A pointer holds the memory address of a value. 
`i := 21`
`p := &i`
`*p = 56`  - set i through the pointer

### Structs - like object

A collection of fields, accessed using a dot

```go
type Vertex struct{
  X int
  Y string
}
v := Vertex{10, 20}
p := &v
p.X = 1e9
fmt.Println(Vertex{1, "Foo"})
fmt.Println(v.X)
```
