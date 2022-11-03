# ------------------------- FOR LOOPS EXERCISE -------------------------

names_1 = ['john ClEEse', 'Eric IDLE', 'michael']
names_2 = ['graHam chapman', 'TERRY', 'terry jones']
invitation_text = "you are invited to the party on saturday!"

# Join list contents into list 1
names_1.extend(names_2)

# Add Two input names to the list
for index in range(2):
    names_1.append(input("Enter a new name: "))

# Print each item with for loop
for item in names_1:
    print(f'{item.capitalize()}! {invitation_text}')
