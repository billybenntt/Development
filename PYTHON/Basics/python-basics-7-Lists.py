# Lists

friends = ['John', 'Michael', 'Terry', 'Eric', 'Graham']
enemies = ['Chavez', 'Lunch', 'Ches', 'Chairman', 'Tucker']

cars = [911, 130, 328, 535, 740, 308]

reverse_friends = friends[::-1]
print(reverse_friends)
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

# Append Item at the end
friends.append("Indio")
print(friends)
# Insert Item at Index N
friends.insert(3, "Galana")
print(friends)
# Insert and Override index
friends[3] = "Lupe"
print(friends)

# Remove Specified Item
friends.remove("Michael")
print(friends)
# Remove Last Item
friends.pop()
print(friends)
# Remove Item at Index N
friends.pop(2)
print(friends)

# --------------------------------- ARRAY COMBINING ---------------------------------

# Extend List with another List
friends.extend(enemies)
print(friends)

# Combine two different Lists
everyone = friends + enemies
print(everyone)

# --------------------------------- ARRAY DUPLICATION ---------------------------------


# Copy List into new list (Method 1)
new_friends = friends[:]
print("new friends", new_friends)

# Copy List into new list (Method 2)
old_friends = friends.copy()
print("old friends", new_friends)

# Copy List into new list (Method 3)
cool_friends = list(friends)
print("cool friends", new_friends)

# --------------------------------- ARRAY DELETION ---------------------------------


# Remove all the elements
friends.clear()
print(friends)

# Delete Array Completely
del friends
