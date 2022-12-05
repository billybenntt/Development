# Open File in Read Mode
# Read File and Directly iterate using list from SplitLines
# Iterate for each item into array
# Create Template String with items of array.

with open("movies.txt", "r") as my_file:
    for item in my_file.read().splitlines():
        movie = item.split(",")[0]
        year = item.split(",")[1]
        print(f'{movie} was released {2022 - int(year)} Years Ago')
