# Select File, Read Mode
my_file = open("./greeting.txt", "r")

# Read File, Full String
list1 = my_file.read().splitlines()

# Close File
my_file.close()

print(list1)
