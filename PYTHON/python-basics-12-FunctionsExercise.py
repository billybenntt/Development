# Greets user with 'name' from 'input box' and 'age', if available, default age is used
def greeting(name, age=28, color='red'):
    print(f'Hello {name.title()}, you are {age}!')
    print(f'We hear you like the color {color.lower()}!')
    print(f'You are {age}, you will be {age + 1} years old next birthday')


name = "Bill"
age = 30
color = "Black"

greeting(name, age, color)