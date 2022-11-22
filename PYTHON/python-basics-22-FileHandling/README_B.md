# Python Basics 23

## File Handling II : Context manager

### Open File

Read using `with` 

```python
with open('greeting.txt', 'r') as my_file:
    print(my_file.read())
```

### File Cursor

The file cursor `.seek()` will allow us to return to the begging of the line to allow for multiple actions in the same file by specifying line number.

```python
# Read File, Assign to read_one, Return to Line, Assign to read_two 
with open('greeting.txt', 'r') as my_file:
    read_one = my_file.read()
    my_file.seek(0)
    read_two = my_file.read()
```
