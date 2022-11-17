# Tuples
friends_tuple = ('John', 'Michael', 'Terry', 'Eric', 'Graham')

location_a = (13.4125, 103.866667)
location_b = 13.4125, 103.866667

print(friends_tuple[2:])
# Get Last Item
print(friends_tuple[-1])
# Reverse List
reverse_friends = friends_tuple[::-1]
print(reverse_friends)
# Get Tuple Length
print(len(friends_tuple))
# Find item Position
print(friends_tuple.index("Eric"))
# Count occurrences of item
print(friends_tuple.count("Eric"))

print(type(friends_tuple))
print(type(location_a))
print(type(location_b))


