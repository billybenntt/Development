# ---------- DECLARATION  ----------

python = {'John': 35, 'Eric': 36, 'Michael': 35, 'Terry': 38, 'Graham': 37, 'TerryG': 34}
holy_grail = {'Arthur': 40, 'Galahad': 35, 'Lancelot': 39, 'Knight of NI': 40, 'Zoot': 17}
life_of_brian = {'Brian': 33, 'Reg': 35, 'Stan/Loretta': 32, 'Biccus Diccus': 45}

# ---------- MEMBERSHIP TEST  ----------

print('Arthur' in holy_grail)

# If Statement - Negative Membership Test
if 'arthur' not in holy_grail:
    print("He\'s is not here")

# ---------- COMBINING DICTIONARIES  ----------

# Method 1 - Multiple Updates
people = {}
people.update(python)
people.update(holy_grail)
people.update(life_of_brian)
print(people)

# Method 2  - For Loop
people_2 = {}
for groups in (python, holy_grail, life_of_brian): people_2.update(groups)
print(people_2)

# Method 3 - Unpacking (Python 3.5 >)
people_3 = {**python, **holy_grail, **life_of_brian}
print(people_3)

# ---------- CALCULATIONS  ----------

# Summing all the values and template literal
print(f'The sum of the ages is {sum(people_3.values())}')
