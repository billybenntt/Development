# Open File
# Read File and Split it into lines
# Assign to Array
# Iterate for each item into array
# Create Template String with items of array.

with open("friends.csv", "r") as my_file:
    data = my_file.read().splitlines()
    for item in data:
        name = item.split(",")[0]
        year = item.split(",")[1]
        print(f'{name} is {2022 - int(year)} Years Old ')
