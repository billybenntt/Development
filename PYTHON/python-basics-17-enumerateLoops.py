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