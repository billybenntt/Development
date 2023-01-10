# =========== LAMBDA FUNCTIONS CREATING FUNCTIONS ===========

# Main Function
def price_calc(start, hourly_rate):
    return lambda hours: start + hourly_rate * hours


# SUB Function 1
walking_cost = price_calc(10, 30)
print(walking_cost(2))

# SUB Function 2
premium_cost = price_calc(1, 25)
print(premium_cost(2))

# Immediate Call - Just like above
print(price_calc(1, 25)(2))
