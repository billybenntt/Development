# String Formatting

# --------------------------------- MULTILINE STRING ---------------------------------

# Multiline String
msg = """Dear Terry,,
You must cut down the mightiest 
tree in the forest with…
a herring! <3"""
print(msg)

# --------------------------------- FINDING SUBSTRING ---------------------------------
alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

# Find item Position
print(alphabet.find("X"))

# --------------------------------- REPLACING SUBSTRING ---------------------------------

# Instantiate new string, strings are immutable
new_alphabet = alphabet.replace("A", "1")
print(new_alphabet)

# --------------------------------- MEMBERSHIP CHECK  ---------------------------------

is_word = "X" in alphabet
is_letter = "1" not in alphabet

print(is_word)
print(is_letter)

# --------------------------------- TEMPLATE STRING ---------------------------------

name = 'TERRY'
color = 'RED'

# Concatenate String
message_one = '[' + name + '] loves the color ' + color.lower() + '!'

# Template String - Same Outcome
message_two = f'[{name.capitalize()}] loves the color {color.lower()}!'

print(message_one)
print(message_two)


