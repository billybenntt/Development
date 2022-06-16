const bird = {

    // Properties
    name: 'bob',
    age: 3,
    email: 'bob@gmail.com',
    aliases: ['pest', 'rat', 'pigeon'],

    // Methods
    login: function () {
        console.log("user logged in");
    },

    poop: () => {
        return 1;
    }

}


// Access Properties

bird.login();
bird.poop();


