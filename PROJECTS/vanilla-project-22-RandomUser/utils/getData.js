const getData = async (url) => {
  try {
    const response = await fetch(url)
    /* Extract Object inside Array and Assign to Variable data */
    const { results: [data] } = await response.json()
    /* Destructure deep Levels of [data] Object into single variables */
    const {
      name: { first, last },
      picture: { large: image },
      location: { street: { name: streetName, number: streetNumber } },
      dob: { age },
      login: { password },
      phone,
      email
    } = data
    /* Adding Values Together */
    const fullName = `${first} ${last}`
    const address = `${streetNumber} ${streetName}`
    /* Pack new Object and Return */
    return { fullName, age, email, address, phone, image, password }
  } catch (error) {
    console.log(error)
  }
}

export { getData }