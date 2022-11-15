# Dictionaries I

- Key Value Pairs

- Keys are required to be inside quotes 'key': 'value'

- Values can contain lists, integers and more dictionaries

### Dictionaries Syntax

```python
movie = {
    'title': "Life of Brian",
    'year': 1979,
    'cast': ['John', 'Eric', 'Michael', 'Bob']
}
```

### Access Values

```python
# Method 1 
print(movie['title'])
# Method 2 - Get Method 
print(movie.get('title'))
# Returns none if value does not exist
print(movie.get('budget'))
# Returns "not found" if value does not exist
print(movie.get('budget', 'not found'))
```

### Create and Update Values

```python
# Update Value
movie['title'] = "Life of Pie"
# Update Value - Method 1
movie['budget'] = 1000000
# Update Value - Method 2
movie.update({'title': 'holly grail'})
```

### Delete Values

```python
# Delete and Save Value - Method 2
budget = movie.pop('budget')
# Delete Value - Method 1
del movie['year']
### Get List of Key/Values
```

### Get Key/Values/Items List

```python
# Get List of Keys
print(movie.keys())
# Get List Of value
print(movie.values())
# Get Tuples of Keys + Values
print(movie.items())
```

### Iteration

```python
# Iterate Key  - For 1 value
for key in movie:
    print(key)

# Iterate Key+Value  - For 2 values
for key, value in movie.items():
    print(key, '1', value)
```
