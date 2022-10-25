print('python101 - Enumerate')
friends = ['Brian', 'Judith', 'Reg', 'Loretta', 'Colin']

# Range Method
for friend in range(len(friends)):
    print(friend + 1, friends[friend])

# Enumerate Method (Returns a tuple)
for item in enumerate(friends):
    print(item)

# Enumerate Method, with index starting at 2
for num, item in enumerate(friends, 2):
    print(num, item)

# Internal Tuple(counting Upwards) External Tuple counting Downwards
for item in enumerate(enumerate(friends, 51), -100):
    print(item)


# Iterate through each letter of "Python" with Index / Start at index 5
for num, letter in enumerate("Python", start=5):
    print(num, letter)
