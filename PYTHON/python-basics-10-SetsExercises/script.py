# Datasets
friends_set1 = {'John', 'Michael', 'Terry', 'Eric', 'Graham'}
friends_set2 = {'Reg', 'Loretta', 'Colin', 'John', 'Graham'}
cars = ['900', '420', 'V70', '911', '996', 'V90', '911', '911', 'S', '328', '900']

# Check if ‘Eric’ and ‘John’ exist in friends (Membership Test)
friends_there = "Eric" in friends_set1 and "John" in friends_set1
print(friends_there)

# combine or add the two sets (Union)
all_friends = friends_set1.union(friends_set2)
print(friends_set1 | friends_set2)
print(all_friends)

# Find names that are in both sets (Intersection)
both_friends = friends_set1.intersection(friends_set2)
print(friends_set1 & friends_set2)
print(both_friends)

# find names that are only in friends_set1 (Difference)
friends_set1_only = friends_set1.difference(friends_set2)
print(friends_set1 - friends_set2)
print(friends_set1_only)

# Show only the names who only appear in friends_set2 (Difference)
friends_set2_only = friends_set2.difference(friends_set1)
print(friends_set2 - friends_set1)
print(friends_set2_only)

# Show only the names that only appear on each of the lists (Symmetric Difference)
each_set_only = friends_set1.symmetric_difference(friends_set2)
print(friends_set1 ^ friends_set2)
print(each_set_only)

# Create a new cars-list without duplicates
cars_wo_dupes = list(set(cars))
cars_wo_dupes.sort()
print(cars_wo_dupes)
