# Proper Destructuring

This guide shows how to destructure stuff like a pro

### Object Schema

The following schema contains Object -> Array -> Object

```json
{ "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Chad",
                "last": "Schmidt"
            },
            "location": {
                "street": {
                    "number": 2017,
                    "name": "E Sandy Lake Rd"
                },
                "city": "Mildura",
                "state": "Queensland",
                "country": "Australia",
                "postcode": 9090,
                "coordinates": {
                    "latitude": "-81.8131",
                    "longitude": "-108.7628"
                },
                "timezone": {
                    "offset": "-10:00",
                    "description": "Hawaii"
                }
            },
            "email": "chad.schmidt@example.com",
            "login": {
                "uuid": "2d13397b-f86a-40b4-85f7-a19ee1b23d6f",
                "username": "yellowkoala663",
                "password": "factory",
                "sha256": "a2c925c63b78426e9f2293acb51cbea61282d606183322a3f1e18bbedf6b4083"
            },
            "dob": {
                "date": "1949-06-25T04:47:35.872Z",
                "age": 73
            },
            "registered": {
                "date": "2013-08-18T16:30:21.156Z",
                "age": 9
            },
            "phone": "08-1712-8393",
            "cell": "0494-835-177",
            "id": {
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/91.jpg",
            },
            "nat": "AU"
        }
    ],
    "info": {
        "seed": "5c6e046470a3b328",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}
```



## Destructuring Efficient Approach

The following function is an example of clean destructuring in inner levels of an object and returning a clean object with values that required concatenation



```javascript
const getData = async () => {
  const response = await fetch(url)
  /* Extract Object inside Array and Assign to Variable data */
  let { results: [data] } = await response.json()
  /* Destructure deep Levels of [data] Object into single variables */
  let {
    name: { first, last },
    picture: { large: image },
    location: { street: { name: streetName, number: streetNumber } },
    dob: { age },
    login: { password },
    phone,
    email
  } = data

  /* Adding Values Together */
  let fullName = `${first} ${last}`
  let address = `${streetNumber} ${streetName}`

  /* Pack new Object and Return */
  return { fullName, age, email, address, phone, image, password }
}
```
