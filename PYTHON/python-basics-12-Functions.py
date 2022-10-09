# Functions

# Function
def greeting_0():
    print("Hello Friend")


# Function with Parameter
def greeting_1(name):
    print("Hello Friend " + name)


# Function with Return Value
def add_numbers(num1, num2):
    return num1 + num2


# Function with multiple return values (tuple)
def add_pairs_1(num1, num2, num3):
    result1 = num1 + num2
    result2 = num2 + num3
    result3 = num1 + num3
    return result1, result2, result3


# Function with multiple return values (list)
def add_pairs_2(num1, num2, num3):
    result1 = num1 + num2
    result2 = num2 + num3
    result3 = num1 + num3
    return [result1, result2, result3]


# Call the function
greeting_1("bob")
print(add_numbers(2, 4))
print(add_pairs_1(2, 4, 6))
print(add_pairs_2(2, 4, 6))