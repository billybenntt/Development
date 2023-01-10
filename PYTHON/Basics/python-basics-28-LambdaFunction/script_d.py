# =========== LAMBDA FUNCTIONS CALLING IMMEDIATELY ===========

print((lambda a, b, c: a + b + c)(2, 3, 4))

# Default Values
print((lambda a, b, c=4: a + b + c)(2, 3))

# Named Arguments
print((lambda a, b, c: a + b + c)(a=3, b=3, c=4))

# Unpacked arguments
print((lambda *args: sum(args))(2, 3, 4, 5))
