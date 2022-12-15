# ZIP & UNZIP

# Base Values
numbers = [1, 2, 3, 4]
number_string = '1234'
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
names = ['John', 'Eric', 'Michael', 'Graham', 'Joe']

# Zip to Datatype
combo_one = list(zip(numbers, letters))
combo_two = dict(zip(number_string, letters))
combo_three = dict(zip(names, letters))
combo_four = list(zip(names, letters, numbers))

# Unzip from Tuple
value1, value2, value3 = zip(*combo_four)


# Zipped Values
print(combo_one)
print(combo_two)
print(combo_three)
print(combo_four)

# Unzipped Values
print(value1)
print(value2)
print(value3)
