# Dictionaries II

### Duplicate Values

- Dictionaries cannot have keys with duplicate values, but the values can be duplicates

```python
# Dictionary with Keys with unique values, but values that are the same

holy_grail = {
'Arthur': 40, 
'Lancelot': 39, 
'Knight of NI': 40, 
'Zoot': 17
}
```

### Membership Test

We use the `in` keyword, this is also case sensitive.

```python
# Prints TRUE
print('Arthur' in holy_grail)
# Prints FALSE
print('arthur' in holy_grail)
# If Statement - Negative Membership Test
if 'arthur' not in holy_grail:
    print("He\'s is not here")
```

### Combining Dictionaries

This method calls multiple times the `.update` function on the empty array, this is useful if you only have 2 diccionaries

```python
# Method 1 - Multiple Updates
people = {}
people.update(python)
people.update(holy_grail)
people.update(life_of_brian)
print(people)
```

This method uses a `forLoop` to that is applied into the empty array, useful if you have more than 2 diccionaries in Python 3.5 and below, iterate thru tupple and :assing to empty array using `.update(item)` method.

```python
# Method 2  - For Loop
people_2 = {}
for groups in (python,holy_grail,life_of_brian): people_2.update(groups)
print(people_2)
```

Unpacking Method method is similar to the spread Operator in Javascript, and it's only available in Python 3.5 and above, useful if you have more than 2 diccionaries in Python 3.5 and above

```python
# Method 3  - Unpacking Method
people_3 = {**python, **holy_grail, **life_of_brian}
print(people_3)
```

### Calculations

Assuming all values are integers, it will crash if there's a string

```python
# Summing all the values and template literal 
print(f'The sum of the ages is {sum(people_3.values())}')
# The sum of the ages is 531
```
