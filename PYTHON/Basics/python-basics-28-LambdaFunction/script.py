# =========== LAMBDA FUNCTIONS ===========

# Anonymous function 1 argument
anon_fun_1 = lambda a: a + 10

# Anonymous function 2 arguments
anon_fun_2 = lambda a, b: a * b

# Anonymous function 2 arguments

square = lambda x: x * x

# Anonymous function 2 arguments

name_and_alias = lambda name, alias: name.strip().title() + ":" + alias.strip().title()

print(name_and_alias("  john ClEEse ", "HECKLER"))
