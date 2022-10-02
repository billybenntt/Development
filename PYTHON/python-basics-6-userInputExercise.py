# Get Input from user
first_name = input("Enter your Name: ")
distance = input("Enter the distance in km: ")

# Process Data
distance = float(distance)
distance_miles = round(distance * 1.609)

# Format Data
greeting = f'Hello {first_name.title()}, you have travelled {distance} Kilometers and {distance_miles} Miles'

# Present Data
print(greeting)
