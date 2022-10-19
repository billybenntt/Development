# ------------------------- FOR LOOPS -------------------------

# for in loop
for letter in 'manyletters':
    print(letter, end='-')

print("")
# for in range loop (Continuous)
for number in range(8):
    print(number, end=' ')

print("")
# for in range loop - (Range)
for number in range(2, 8):
    print(number, end=' ')

print("")
# for in range loop (Steps)
for number in range(1, 15, 3):
    print(number, end=' ')

# ------------------------- FOR LOOPS  + LISTS -------------------------
print("")
# for in with list
for name in ["Pepe", "Michael", "Gorch", "Pester"]:
    print(name, end=' ')

print("")
# for in with variable list
friends_list = ["Pepe", "Michael", "Gorch", "Pester"]
for member in friends_list:
    print(member, end='*')

print("")
# for in with index number
for index_number in range(len(friends_list)):
    print(index_number, end=".")
