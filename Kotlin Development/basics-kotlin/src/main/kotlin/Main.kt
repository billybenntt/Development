fun main() {

// Shopping List String
    val shoppingList = mutableListOf(
        "Cherry Pomme",
        "Apple",
        "Apricots",
        "Avocado",
        "Banana",
        "Blackberries",
        "Blueberries",
        "Breadfruit",
        "Cantaloupe",
        "Cherries",
    )

    // Iterator Function
    shoppingList.forEach {
        println(it)
    }

    // Iterator Function without IT
    shoppingList.forEach { interestingFruits ->
        println(interestingFruits)
    }


}