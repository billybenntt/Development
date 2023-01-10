# =========== LAMBDA FUNCTIONS KEY ===========
monty_python = ['John Marwood Cleese', 'Eric Idle', 'Michael Edward Palin', 'Terrence Vance Gilliam',
                'Terry Graham Perry Jones', 'Graham Arthur Chapman']

# Sort by first name
monty_python.sort(key=lambda name: name.split(' '))
print(monty_python)
# Sort by last name
monty_python.sort(key=lambda name: name.split(' ')[-1])
print(monty_python)
