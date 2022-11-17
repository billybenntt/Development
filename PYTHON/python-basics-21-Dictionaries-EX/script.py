# ------- STARTING DATA -------

# Shop Name and Items Showing the Price
freelancers = {'name': 'freelancing Shop', 'brian': 70, 'black knight': 20, 'biccus diccus': 100, 'grim reaper': 500,
               'minstrel': -15}
antiques = {'name': 'Antique Shop', 'french castle': 400, 'wooden grail': 3, 'scythe': 150, 'catapult': 75,
            'german joke': 5}
pet_shop = {'name': 'Pet Shop', 'blue parrot': 10, 'white rabbit': 5, 'newt': 2}
shopping_cart = {'name': 'cart'}


# ------- HELPER FUNCTIONS  -------

# Function that transfer items from shop to cart
def buy_item(cart, shop, item):
    if item in shop:
        cart.update({item: shop.pop(item)})


# Function that shows the store with its current items
def show_store(store):
    shop_name = store["name"]
    shop_items = ", ".join(list(store.keys())[1:])
    print(f'Welcome to [{shop_name}] What do you want to buy? -> {shop_items}')


# Function to show the user's shopping cart items after purchases
def show_cart(cart):
    cart_items = ",".join(list(cart.keys())[1:])
    print(f'You Purchased [{cart_items}] Today it is all free. Have a nice day of mayhem!')


# Function to Start Shopping
def shopping(shop_list):
    for store in shop_list:
        show_store(store)
        purchase = input()
        buy_item(shopping_cart, store, purchase)


# ------- PROJECT RUN  -------


shopping([freelancers, antiques, pet_shop])
show_cart(shopping_cart)
