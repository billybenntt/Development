# Lists

friends = ['John', 'Michael', 'Terry', 'Eric', 'Graham']

cars = [911, 130, 328, 535, 740, 308]

# --------------------------------- ARITHMETIC OPERATIONS ---------------------------------

# Sum the Array
cars_sum = sum(cars)
print(cars_sum)

# Get the max value
cars_max = max(cars)
friends_max = max(friends)
print(cars_max)
print(friends_max)

# Get the min value
cars_min = min(cars)
friends_min = min(friends)
print(cars_min)
print(friends_min)

# --------------------------------- ARRAY OPERATIONS ---------------------------------

# Append Item

friends.append("Indio")
print(friends)

# Insert Item Index N
friends.insert(3, "Galana")
print(friends)

friends.remove(3)