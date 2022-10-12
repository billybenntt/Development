a = 7
b = 3
c = "John"
d = [3, 6, 8, 9, 42]
e = [3, 6, 8, 9, 42]
f = d
# ------------------------- COMPARISON -------------------------

print("Is A equal to B?")
print(a == b)
print("Is NOT A equal to B?")
print(a != b)
print("Is A greater or equal than B?")
print(a >= b)
print("Is A Less or equal than B?")
print(a <= b)

# ------------------------- MEMBERSHIP -------------------------
# Check if a value exist inside iterable (Membership)
print("Is letter [0] in [John]")
print('o' in c)
# Check if a value does not exist inside iterable (Negative Membership)
print("Is Not letter [0] in [John]")
print('x' not in c)

# ------------------------- IDENTITY -------------------------
# Get Memory Values
print("id d:", id(d))
print("id e:", id(e))
print("id f:", id(f))

# Check Identify and value
print("Is d and e the same in value?", d == e)
print("Is d and e the same in memory?", d is e)
print("Is d and f the same in value?", d == f)
print("Is d and f the same in memory?", d is f)

# Negative Identity
print("Is d and e not the same in memory?", d is not e)
print("Is d and f not the same in memory?", d is not f)

# ------------------------- TRUTHY/FALSY VALUES -------------------------

print(int(False))
print(int(True))
print(bool("truthy"))
print(bool(""))
print(bool(1))
print(bool(0))
print(bool([1, 2, 3]))
print(bool([]))
print(42 + True)
