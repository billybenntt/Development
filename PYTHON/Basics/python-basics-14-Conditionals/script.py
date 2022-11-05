condition_a = True
condition_b = False
is_raining = True
is_freezing = True
is_cold = False

# ------------------------- IF STATEMENT -------------------------


if True:
    print("True Runs")

# If Statement
if condition_a:
    print("Condition A Runs")

# If Else Statement
if condition_b:
    print("This will not run")
else:
    print("This will run instead")

# If else with OR (One condition needs to be true)
if is_raining or is_cold:
    print("Bring Umbrella")
else:
    print("Optional")

# If else with AND (both conditions need to be TRUE)
if is_raining and is_freezing:
    print("Bring Jacket, Umbrella, Hat")
else:
    print("Optional")

# If else with AND (both conditions need to be TRUE)
if is_raining and is_freezing or is_cold:
    print("Bring Everything")
elif is_raining:
    print("Don't bring anything")

# If else with NOT, Elif only runs when first condition is false
if not is_cold:
    print("Is_cold is False")
elif True:
    print("This will not run")

# If with Arithmetic
if 3 + 3 + 3:
    print("Result was summed")
if -3:
    print("Result was negative but still True")

# If With Falsy array value;
empty_array = []
if empty_array:
    print("this will only run if the array is not empty")
else:
    print("The array was empty")
