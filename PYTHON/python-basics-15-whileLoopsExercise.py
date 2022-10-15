print('Guessing game')
# Guess the correct number in 3 guesses. If you don’t get it right after 3 guesses you lose the game.
# Give user input box: 1. To capture guesses,
# print(and input boxes) 1. If user wins 2. If user loses
# Tip:( remember you won’t see  print statements during execution,
# so If you want to see prints during while loop, then print to the input box

# Modification 1: number 1-100, tell user if guess is too high/low ,and let them have 5-10 guesses.
# Tip:( remember you won’t see  print statements during execution,
# so If you want to see prints during while loop, print to the input box (This is specific to this platform)


# Global Variables
num = 12
guess = 0
guess_limit = 5
guess_number = 0

# Inside the loop
while guess_number < guess_limit:
    guess = int(input(f"guess a number 1-20: Guess # {guess_number + 1} : last guess was {guess}: ->"))
    # Modded Logic
    if guess != num:
        guess_number += 1
        if guess > num:
            guess = int(input(f"{guess} too high!- Guess again! "))
        else:
            guess = int(input(f"{guess} too low!- Guess again! "))
    # Basic Logic
    if guess == num:
        print(f'You Win! You guessed it {num}')
        break
    else:
        print(f'No, Not {guess}!')
        guess_number += 1

# Outside the Loop
if guess != num:
    print(f'Sorry you lose! it was {num}')