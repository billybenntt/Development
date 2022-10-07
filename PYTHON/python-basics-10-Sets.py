# Remove Duplicates


# Initial List
letters = ["a", "b", "d", "e", "a", "b", "b", "c", "d"]
# Convert to Set
letters = set(letters)
# {'e', 'a', 'b', 'd', 'c'}
# Convert Back to list
letters = list(letters)
# ['e', 'a', 'b', 'd', 'c']
# Sort the items
letters.sort()
# ['a', 'b', 'c', 'd', 'e']


friend_set_1 = {'John', 'Michael', 'Terry', 'Eric', 'Graham', 'Eric'}
friend_set_2 = {'Reg', 'Loretta', 'Colin', 'Eric', 'Graham'}

# Find Intersection (A & B) / Shared Elements between A and B
print(friend_set_1.intersection(friend_set_2))

# Find Union  (A | B) / All Unique Elements between A and B
print(friend_set_1.union(friend_set_2))

# Find Difference (A - B) / Unique Elements from A not in B
print(friend_set_1.difference(friend_set_2))

