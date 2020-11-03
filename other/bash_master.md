### Shell variables

MYDATE-$(date)

echo "$HOME *** `date`"  # show path to home dir and current date

### Get information that can change from computer to computer

```bash
MACHINE=`uname -n`
NUM_FILES=$(/bin/ls | wc -l) # ls | wc -l - show in current folder
```

# Special shell positional parameters $0, $1, $2 .. $n

```bash
#!/bin/bash
echo "The first argument is $1, the second is $2."
echo "The command itself is called $0."

chmod +x myscript
# Then you can provide 2 arguments to script
$ myscript foo bar
```
`$#` - tells you how many parameters you script was given.
`$@` - holds all the argument entered at the command line.

### Reading in paramethers

```bash
#!/bin/bash
read -p "Type in an adjective and verb: " a1 v1
echo "You typed $v1 and $a1."
```

### Pararmeter expension

`${var:-value}` - if variable is unset or empty, expand this to value.
`${var#pattern} - chop the shortest match for *pattern* from the front of var's value.
`${var%pattern} - chop the shortest match for *pattern* from the end of var's value.

```bash
THIS="Example"
THIS=${THIS:="Not Set"} # inside this is "Example"

MYFILENAME=/home/digby/myfile.txt — Sets the value of MYFILENAME
FILE=${MYFILENAME##*/} — FILE becomes myfile.txt
DIR=${MYFILENAME%/*} — DIR becomes /home/digby
NAME=${FILE%.*} — NAME becomes myfile
EXTENSION=${FILE##*.} — EXTENSION becomes txt
```

### Programming construct `if...then`

```bash
VARIABLE=1
if [ $VARIABLE -eq 1 ]; then
echo "THe variable is 1"
fi

# -eq - better for comparing numbers
# = - best for comparing string values
```

```bash
filename="$HOME"
if [ -f "$filename" ] ;
  echo "$filename is a
elif [ -d "$filename" ]
  echo "$filename is a
else
  echo "I have no idea
fi
```

If directory doesn't exist then make the directory

```bash
dirname="/tmp/testdir"
[ -d "$dirname" ] || mkdir "$dirname"
# instead of pipes you can use two ampersands
```

One line if-then-else statement

```bash
dirname=/home/roman/dirname
[ -e $dirname ] && echo $dirname already exists || mkdir $dirname
```

### `for...do` loop 

```bash
for VAR in LIST
do
  { body }
done

```bash
# each value need to be separeted from next by whitespace
for NUM in 0 1 2 3 4 5
do
  echo The number is $NUM
done
```

### The general regular expression parser (or grep)

Grep is just a way to find patterns in files or text.

`enc | grep ^HO` - find all environment variables that begin with HO.

Translate or delete characters (tr)

`echo "Mixed UPpEr anD LoWeR CAsE" | tr [A-Z] [a-z]`

```bash
# replace any tabs and spaces into underscores
for file in * ; do
f=`echo $file | tr [:blank:] [_]`
[ "$file" = "$f" ] || mv -i -- "$file" "$f"
done
```

The stream editor (sed)

`sed 's/Mac/Linux/g' somefile.txt > fixed_file.txt` - replace every every occurence instance of the string 

