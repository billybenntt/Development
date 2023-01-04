# Zip & Unzip

`ZIP` is Used to combine diferent iterables, lists, tupples, strings, etc whereas `UNZIP` is used to destructure or extract the values into variables.

### Combine List

- We can combine two or more iterables

```python
# Initial Values
nums = [1,2,3,4] 
letters = ['a','b','c','d']

# Combine into zip - Covert to list
combo_one = list(zip(numbers, letters))

# Result:
# [(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd')]
```

### Combine Dictionary

- Recommended for two iterables

```python
# Initial Values
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
names = ['John', 'Eric', 'Michael', 'Graham', 'Joe']

# Combine into zip - Covert to dict
combo_three = dict(zip(names, letters))

# Result 
# {'John': 'a', 'Eric': 'b', 'Michael': 'c', 'Graham': 'd', 'Joe': 'e'}
```

### Unpack List of Tupples

The `*` should be used to unzip or destucture tupples into variables.

```python
# Initial Values
# [('John', 'a', 1), ('Eric', 'b', 2), ('Michael', 'c', 3), ('Graham', 'd', 4)]

# Unzip from Tuple
value1, value2, value3 = zip(*combo_four)


# Result value1, value2 and value3

('John', 'Eric', 'Michael', 'Graham')
('a', 'b', 'c', 'd')
(1, 2, 3, 4)
```

### MAPPING

This is used to map 2 strings, lists into a dictionary

#### Method 1

```python
# Initial Values
keys = 'this parrot is deceased'
values = 'este perico esta muerto'

# Split into list by space
keys = keys.split()
values = values.split()

# Map Keys and Values from both lists
en_es_dictionary = dict(zip(keys, values))

# Result 
{'this': 'este', 'parrot': 'perico', 'is': 'esta', 'deceased': 'muerto'}
```

#### Method 2

```python
en_es_dictionary_new = {key: value for key, value in zip(keys, values)}

# Result 
{'this': 'este', 'parrot': 'perico', 'is': 'esta', 'deceased': 'muerto'}
```

### DESTRUCTURING

Used to destructure dictionary values into single variables

```python
# Method  1 - Separate list from keys and values
english, spanish = list(en_es_dictionary_new.keys()), list(en_es_dictionary_new.values())

# Method 2  - Separate Full items into zip (Requires Typecasting)
english_b, spanish_b = zip(*en_es_dictionary_new.items())

# english, spanish
['this', 'parrot', 'is', 'deceased']
['este', 'perico', 'esta', 'muerto']

# english_b, spanish_b
('this', 'parrot', 'is', 'deceased')
('este', 'perico', 'esta', 'muerto')


```


