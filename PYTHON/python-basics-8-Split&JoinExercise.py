# From the list above fill a list(friends_list) properly
# with the names of all the friends. One per "slot"

csv = 'Eric,John,Michael,Terry,Graham:TerryG;Brian'

# Replace [:] and [;] with Comma, then split by comma into list
friends_list = csv.replace(":", ",").replace(";", ",").split(",")
print(friends_list)
