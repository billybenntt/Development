const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.length)
    console.log("https://pipedream.com/")
    return data

  } catch (e) {
    console.log(e)
  }

}

export default fetchFollowers
