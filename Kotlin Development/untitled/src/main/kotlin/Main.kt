    
fun main() {


    val shoppingList = mutableListOf("Car", "Mosca", "As3s", "As3s", "As3s", "As3s")


    val x = 3

    when(x){
        in 1.. 2 -> println("X is less than 2")
        in 3.. 19 -> println("X is between 3 and 20")

        else -> {
            println("not in the range")
        }

    }


}