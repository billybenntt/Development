print('Guessing game')
# Guess the correct number in 3 guesses. If you don’t get it right after 3 guesses you lose the game.
# Give user input box: 1. To capture guesses,
# print(and input boxes) 1. If user wins 2. If user loses
# Tip:( remember you won’t see  print statements during execution,
# so If you want to see prints during while loop, then print to the input box

# Modification 1: number 1-100, tell user if guess is too high/low ,and let them have 5-10 guesses.
# Tip:( remember you won’t see  print statements during execution,
# so If you want to see prints during while loop, print to the input box (This is specific to this platform)


iterator = 3
while iterator:
    secret_number = 23
    guess = int(input("Enter number: "))
    if guess == secret_number:
        print("You win")
        iterator = 0
    else:
        iterator -= 1
        print("Try again")