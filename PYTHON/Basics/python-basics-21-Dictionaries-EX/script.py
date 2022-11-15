# ------- STARTING DATA -------

# Shop Name and Items Showing the Price
freelancers = {'name': 'freelancing Shop', 'brian': 70, 'black knight': 20, 'biccus diccus': 100, 'grim reaper': 500,
               'minstrel': -15}
antiques = {'name': 'Antique Shop', 'french castle': 400, 'wooden grail': 3, 'scythe': 150, 'catapult': 75,
            'german joke': 5}
pet_shop = {'name': 'Pet Shop', 'blue parrot': 10, 'white rabbit': 5, 'newt': 2}


# ------- HELPER FUNCTIONS  -------

# Function that transfer items from shop to cart
def buy_item(cart, shop, item):
    if item in shop:
        cart.update({item: shop.pop(item)})


# Function that shows stores and items
def show_stores(stores):
    for store in stores:
        print(store['name'])


# ------- PROJECT RUN  -------

show_stores([freelancers, antiques, pet_shop])

shopping_cart = {'name': 'cart'}
buy_item(shopping_cart, pet_shop, "newt")
buy_item(shopping_cart, antiques, "german joke")
