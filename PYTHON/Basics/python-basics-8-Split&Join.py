# --------------------------------- SPLIT -> Split String into List ---------------------------------

msg = 'Welcome to Python 101: Split and Join'
csv = 'Eric,John,Michael,Terry,Graham'
friends_list = ['Eric', 'John', 'Michael', 'Terry', 'Graham']

# Split tokens into lists
msg_list = list(msg)
print(msg_list)

# Split Words, Delimited by Space
msg_split = msg.split(" ")
print(msg_split)

# Split Words, Delimited by comma
csv_split = csv.split(",")
print(csv_split)

# --------------------------------- JOIN -> Join List into String ---------------------------------

# Convert to string, including brackets
friends_string = str(friends_list)
print(friends_string)

# Join Array into string by (.)
friends_joined = '.'.join(friends_list)
print(friends_joined)

# --------------------------------- SPLIT AND JOIN ---------------------------------

# Remove Spaces, Join into a single string.
msg_split_joined = "".join(msg.split(" "))
print(msg_split_joined)


# Remove Spaces, replace spaces with nothing
msg_no_spaces = msg.replace(" ", "")
print(msg_no_spaces)