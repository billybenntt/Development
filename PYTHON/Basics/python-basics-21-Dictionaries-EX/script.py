# ------- STARTING DATA -------

# Shop Name and Items Showing the Price
freelancers = {'name': 'freelancing Shop', 'brian': 700, 'black knight': 20, 'biccus diccus': 100, 'grim reaper': 500,
               'minstrel': -15}
antiques = {'name': 'Antique Shop', 'french castle': 400, 'wooden grail': 3, 'scythe': 150, 'catapult': 75,
            'german joke': 5}
pet_shop = {'name': 'Pet Shop', 'blue parrot': 10, 'white rabbit': 900, 'newt': 2}
# Player Shopping Cart and Wallet
shopping_cart = {'name': 'player', 'gold': 1000}


# ------- HELPER FUNCTIONS  -------

# Function that transfer items from shop to cart
def buy_item(cart, shop, item):
    if item in shop:
        if check_wallet(cart, shop, item):
            cart.update({item: shop.pop(item)})
        else:
            return
    else:
        print("Item does NOT exist, walking to next shop")


# Function that checks if user has enough gold
def check_wallet(cart, shop, item):
    if cart['gold'] > shop[item]:
        cart.update({'gold': cart['gold'] - shop[item]})
        print(f'Purchase Successful, Items Added to Cart')
        print(f'Gold Left ${cart["gold"]}')
        return True
    else:
        print(f'Purchase Failed, Not Enough Gold')
        print(f'Gold Left ${cart["gold"]}')
        return False


# Function that shows the store with its current items
def show_store(store):
    shop_name = store["name"].upper()
    shop_items = list(store.items())[1:]
    shop_items = str(shop_items).replace("(", "").replace(")", "").replace("[", "").replace("]", "")
    print(f'* Welcome to [{shop_name}]')
    print(f'* What do you want to buy? -> {shop_items}')
    print(f'* Type Exit to Exit Store')


# Function that shows the inventory of all the stores
def show_inventory(time):
    all_stores = {**freelancers, **antiques, **pet_shop, 'name': 'Big Biz'}
    shop_items = list(all_stores.items())[1:]
    shop_items = str(shop_items).replace("(", "").replace(")", "").replace("[", "").replace("]", "")
    print(f'[INVENTORY LEVELS {time}]')
    print(f'* Current Items')
    print(f'*{shop_items}')
    print("")


# Function to Start Shopping and Iterate over list of shops (LIST INPUT)
def start_shopping(shop_list):
    for store in shop_list:
        show_store(store)
        user_input = input()
        if user_input == 'exit':
            print("User exit the shop")
            print("")
            continue
        buy_item(shopping_cart, store, user_input)
        print("")


# Function to show the user's shopping cart items after purchases
def start_checkout(cart):
    cart_items = ",".join(list(cart.keys())[2:])
    cart_total = list(cart.values())[2:]
    print('[CHECKOUT]')
    print(f'Your Grand Total is ${sum(cart_total)}')
    print(f'You Purchased [{cart_items}]. Have a nice day of mayhem!')
    print("")


# ------- PROJECT RUN  -------

show_inventory("MORNING")
start_shopping([freelancers, antiques, pet_shop])
start_checkout(shopping_cart)
show_inventory("EVENING")