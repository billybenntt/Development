# Initial Values
keys = 'this parrot is deceased'
values = 'este perico esta muerto'

# Split into list by space
keys = keys.split()
values = values.split()

# ----------- MAPPING  -----------

# Method 1  - Map Keys and Values from both lists
en_es_dictionary = dict(zip(keys, values))
# Method 2  - Map Keys and Values from both lists
en_es_dictionary_new = {key: value for key, value in zip(keys, values)}

# ----------- DESTRUCTURING -----------
# Method  1 - Separate list from keys and values
english, spanish = list(en_es_dictionary_new.keys()), list(en_es_dictionary_new.values())

# Method 2  - Separate Full items into zip (Requires Typecasting)
english_b, spanish_b = zip(*en_es_dictionary_new.items())

print(english)
print(spanish)
print(english_b)
print(spanish_b)
