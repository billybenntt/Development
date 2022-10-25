# ------------------------- SORT VS SORTED  -------------------------


friends_group = ['Alpha', 'Brian', 'Charles', 'Delta', 'Echo']
friends_group_one = ['Alpha', 'Brian', 'Charles', 'Delta', 'Echo']
friends_group_two = ['Alpha', 'Brian', 'Charles', 'Delta', 'Echo']
# Tuple Friends
friends_group_three = ('Alpha', 'Brian', 'Charles', 'Delta', 'Echo')
# Dictionary Friends
friends_group_four = {"Alpha": 1, "Brian": 2, "Charles": 3, "Delta": 4, "Echo": 5}

# ------------------------- SORT -------------------------

#  Sort Array (Changes the original list)
friends_group.sort()
# Reverse Array (Changes the original list)
friends_group.reverse()

print("SORTED AND REVERSED")
print(friends_group)
# ------------------------- SORTED -------------------------

# Returns a new List (Original array does not change)
new_friends_two = sorted(friends_group_two)
# Returns a new List (Even if it's a tuple)
new_friends_three = sorted(friends_group_three)
# Returns a new List of Tuples (Even if it's a dictionary)
new_friends_four = sorted(friends_group_four.items())
# Returns only the keys from value above
new_friends_four_values = sorted(friends_group_four.values())
# Returns Reversed Sorted
new_friends_two_reversed = sorted(friends_group_two, reverse=True)
# Returns a reversed object, needs to be converted into list
reversed_stuff = reversed(friends_group_one)


# ------------------------- EXAMPLES OF SORTING AND REVERSING -------------------------

print("SORTED LIST")
print(friends_group_two)
print("SORTED LIST (New Array)")
print(new_friends_two)
print("SORTED TUPLE")
print(new_friends_three)
print("SORTED DICT (items)")
print(new_friends_four)
print("SORTED DICT (Values)")
print(new_friends_four_values)
print("SORTED LIST (Reversed True)")
print(new_friends_two_reversed)
print("REVERSED OBJECT (Converto to List)")
print(reversed_stuff)
print(list(reversed_stuff))
print("SLICE REVERSE METHOD [::-1]")
print(friends_group_one[::-1])
