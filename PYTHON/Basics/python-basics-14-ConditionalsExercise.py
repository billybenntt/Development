# Create a calculator which handles +,-,*,/ and outputs answer based on the mode/ operator used
# Hint: use 3 separate inputs
# Bonus: Extend functionality with extra mode,so it also does celsius to fahrenheit conversion
# formula is: temp in C*9/5 + 32 = temp in f


# Get Values from the user
number_1 = float(input("Enter First Number: "))
number_2 = float(input("Enter Second Number: "))
operation = input("Enter Type [+],[-],[*],[/],[c]: ")


# Calculator Function
def calculator(number1, number2, operator):
    if number1 and number2:
        if operator == '+':
            return number1 + number2
        elif operator == '-':
            return number1 - number2
        elif operator == '*':
            return number1 * number2
        elif operator == '/':
            return number1 // number2
        elif operator == 'c' or operator == 'C':
            print("Celsius Conversion Mode")
            return f'{number1 * (9 / 5) + 32} Degrees Fahrenheit'
        else:
            return "bad operator"
    else:
        return "No Operations with zeros"


# Display Result
print("Result is: ", calculator(number_1, number_2, operation))
