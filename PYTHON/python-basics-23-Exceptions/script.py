# EXCEPTIONS -  TRY, EXCEPT, RAISE
import math

try:
    number = 1 / 1
    test_number = 20 + number
    square_root = math.sqrt(100)
    if test_number > 20:
        raise ValueError(test_number)
except ZeroDivisionError as error:
    print(f'User tried dividing by Zero')
    print(f'ERROR-> {error}')
except ValueError as error:
    print(f'ERROR-> {error}')
else:
    print(f'All The Values are correct')
finally:
    print(f'This will always run')
