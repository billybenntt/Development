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




















