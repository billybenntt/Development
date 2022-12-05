# ------------------------- FOR LOOPS BREAK/CONTINUE -------------------------


friends = ['John', 'Terry', 'Eric', 'Michael', 'George']

print("***Continue Loop***")
# Skip Iteration if condition is met
for index in range(len(friends)):
    if friends[index] == 'Terry':
        continue
    print(friends[index])

print("***Break Loop**")
# Break loop if condition is met
for index in range(len(friends)):
    if friends[index] == 'Michael':
        break
    print(friends[index])

