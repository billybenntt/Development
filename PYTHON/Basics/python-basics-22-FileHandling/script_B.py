# Read File, Context Manager
with open('greeting.txt', 'r') as my_file:
    read_one = my_file.read()
    my_file.seek(0)
    read_two = my_file.read()