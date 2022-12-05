# Exceptions

### Workflow

```python
try:
# Code that you want to run
  raise ValueError(num)
except:
# Code that is executed if error occurs
else:
# Code that is executed if no error
finally:
# Code that is always executed
```

### Try

Try will run the code that we want to test

```python
try:
    number = 1/1
    square_root = math.sqrt(100)
```

### Except

Except will run if the code has error, except can take built in exceptions such as `ValueError`, `ZeroDivisionError` and the value returned can be accesed by declaring a variable with the keyword `as` if the user were to divide by zero the first except will be triggered, or if the user were to use the wrong value into an object the second except will be triggered.

```python
except ZeroDivisionError as error:
    print(f'User tried dividing by Zero')
    print(f'ERROR-> {error}')
except ValueError as error:
    print(f'Wrong value assigned to object')
    print(f'ERROR-> {error}')
```

### Raise

Raise is used to raise user defined errors of certain type, if the following condition is met a value error will be raised and the value will be send to the except with the `ValueError` block.

```python
    if test_number > 20:
        raise ValueError(test_number)
```

### Else

The else block will run if there are no errors within the try block

```python
else:
    print(f'All The Values are correct')
```

### Finally

The finally block will run regardless of the outcome of the try block

```python
finally:
    print(f'This will always run')
```
