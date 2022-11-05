# String Operations


# --------------------------------- STRING SLICING ---------------------------------
alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

# Get Everything
print(alphabet)
# -> ABCDEFGHIJKLMNOPQRSTUVWXYZ
# Get First Position
print(alphabet[0])
# -> A
# Get Last Position
print(alphabet[-1])
# -> Z
# Get First 4 Positions ( 0 to 3)
print(alphabet[:4])
# Start from 5th Position to the end
print(alphabet[5:])
# Get Everything but last 4 Positions
print(alphabet[:-4])
# Get Range (Position 3 to 9)
print(alphabet[2:10])
# Negative Indexing, Slice from right side
print(alphabet[-5:-2])

# --------------------------------- TEXT CONCATENATION ---------------------------------
twice_alphabet = alphabet + alphabet
thrice_alphabet = alphabet * 3
print(twice_alphabet)
print(thrice_alphabet)

# -> ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ

# --------------------------------- TEXT TRANSFORMATION ---------------------------------
# To Lowercase
small_alphabet = twice_alphabet.lower()
# To Uppercase
big_alphabet = twice_alphabet.upper()
# to Titlecase
capitalize_word = 'this was all lowercase'.title()
# Reverse String
inverted_word = big_alphabet[::-1]

print(small_alphabet)
print(big_alphabet)
print(capitalize_word)

# --------------------------------- STRING INFORMATION ---------------------------------

# Get String length
text_length = len(thrice_alphabet)
print(text_length)

# Count occurrences of string
print(thrice_alphabet.count("AB"))

# --------------------------------- Exercise ---------------------------------
msg = 'welcome to Python 101: Strings'
print(msg)
new_string = msg[18] + msg[7] + msg[:8] + msg[25:29] + msg[7:11] + msg[13] + msg[12] + msg[2] + msg[1] + msg[25]

new_string = new_string.title()
inverted_string = new_string[::-1]
print(new_string)
# 1 Welcome Ring To Tyler
print(inverted_string)
# relyT oT gniR emocleW 1
