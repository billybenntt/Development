const bird = {
    // Properties
    name: 'bob',
    // Integer
    age: 3,
    // String
    email: 'bob@gmail.com',
    // Array of Strings
    aliases: ['pest', 'rat', 'pigeon'],
    // Array of Objects
    blogs: [{title: 'Another book title', likes: 30}, {title: 'The Renaissance', likes: 302}],


    // Method Declaration 1 - Regular Function
    poop1: function () {
        console.log("poop1");
    },
    // Method Declaration 2 - Shorthand Method
    poop2() {
        console.log(this.aliases);
    }, // Method Declaration 3 - Arrow Function  - This will refer to window object
    poop3: () => {
        console.log(this.name);
    }, // Method Declaration 4  - Regular Function - This will refer to current object
    poop4: function () {
        console.log(this.name);
    }

}