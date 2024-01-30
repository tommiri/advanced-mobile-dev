fun main() {
    // Write a Kotlin program to print "Hello, World!" to the console.
    println("Hello World!\n")

    // Write a program that assigns a name to a variable and then prints "Hello, [name]!".
    val name = "Tommi"
    println("Hello $name\n")

    // Create variables of different data types (Int, Double, Boolean, String) and print their values.
    val int = 10
    val double = 20.0
    val string = "This is a string!"
    println("Integer: $int  Double: $double  String: $string\n")

    // Write a program that calculates and prints the sum of two predefined numbers.
    fun calculateSum(x: Int, y: Int): Int {
        return x + y
    }

    println("The sum of 2 and 3 is ${calculateSum(2, 3)}\n")

    // Write a program that checks if a predefined integer is even or odd.
    fun isEven(x: Int): Boolean {
        return x % 2 == 0
    }

    fun getIsEvenString(x: Int): String {
        val sb = StringBuilder()
        sb.append("The number $x is ").append(if (isEven(x)) "even." else "odd.")
        return sb.toString()
    }

    println(getIsEvenString(42))
    println(getIsEvenString(43) + '\n')

    // Create a class Person with properties name and age. Instantiate it and print its properties.
    class Person(val n: String, val age: Int) {
        override fun toString(): String {
            return "Name: $n\nAge: $age"
        }
    }

    val person = Person("Tommi", 24)

    println("$person\n")

    // Write a program that creates an array of 5 numbers and prints them.
    val numArray = intArrayOf(1, 2, 3, 4, 5)
    numArray.forEach { print("$it ") }
    println('\n')

    // Create an array of Person objects and iterate through it to print the name and age of each person.
    val personArray = Array(3) { i -> Person("Person $i", i + 10) }
    personArray.forEach { println(it) }
    println()

    // Create a list of strings and use a loop to print each string in uppercase.
    val stringList = listOf("one", "two", "three")
    stringList.forEach { println(it.uppercase()) }
    println()

    // Create a list of Person objects and use a loop to print the name and age of each person.
    val person1 = Person("List Person 1", 20)
    val person2 = Person("List Person 2", 30)
    val person3 = Person("List Person 3", 40)
    val personList = listOf(person1, person2, person3)
    personList.forEach { println(it) }
}