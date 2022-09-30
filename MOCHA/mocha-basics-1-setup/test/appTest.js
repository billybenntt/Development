const assert = require('chai').assert
const app = require('../index')


// 1. Declare Describe
// 2. Inside Describe Add a title and an anonymous function


describe('App', function () {

    // 3. Inside the Anonymous function declare the it() test function
    // 4. Provide a title and another anonymous function

    it('app should return hello', function () {

        // 5. Use assert.equal and pass the testing function and the expected value
        assert.equal(app(), 'hello')
    })
})

