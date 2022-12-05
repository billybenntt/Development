# Python Basics 23

## File Handling I : Reading Files

### Open File

Assign to variable, read mode only

```python
# Select File, Read Mode
my_file = open("./greeting.txt", "r")
```

### Read File

Assign to variable, read mode only `.read()` invoking the function once will cause the file to read till the end of the file, invoking a second one will not make it go back to the first line

```python
# Read File, Full String
text_content = my_file.read()

# Read File, 10 Characters
text_content_10 = my_file.read(10)
```

### Read Line

This will read the function line by line, invoking multiple times the same function will cause the function to switch to the next line

```python
# Read First Line
my_file.readline()
# Read Second Line
my_file.readline()
```

### Read Lines

This function will create a list and each line in the document represents an item `/n` is addded at the end of each item 

```python
# Read Lines to List
my_file.readlines()
```

This combination will achieve almost the same effect as above but without including `/n` at the end of each item

```python
# Read Lines to List without /n
my_file.read().splitlines()
```

### Close File

Always after working an open file it's important to close it

```python
# Close the current file
my_file.close()
```
