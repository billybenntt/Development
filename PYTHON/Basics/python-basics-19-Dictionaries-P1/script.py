# ---------- DECLARATION  ----------


movie = {
    'title': "Life of Brian",
    'year': 1979,
    'cast': ['John', 'Eric', 'Michael', 'Bob']
}

# ---------- ACCESS VALUES  ----------

print(movie['title'])
print(movie.get('title'))
print(movie.get('budget'))
print(movie.get('budget', 'not found'))

# ---------- UPDATE/CREATE VALUES ----------

# Update Value
movie['title'] = "Life of Pie"

# Update Value - Method 1
movie['budget'] = 1000000

# Update Value - Method 2
movie.update({'title': 'holly grail'})

# ----------  DELETE VALUES  ----------


# Delete and Save Value - Method 2
budget = movie.pop('budget')

# Delete Value - Method 1
del movie['year']

# ----------  GET LIST KEYS/VALUES  ----------

# Get List of Keys
movie.keys()

# Get List Of value
movie.values()

# Get Tuples of Keys + Values
movie.items()

# ----------  ITERATION   ----------

# Iterate Key  - For 1 value
for key in movie:
    print(key)

# Iterate Key+Value  - For 2 values
for key, value in movie.items():
    print(key, '1', value)
