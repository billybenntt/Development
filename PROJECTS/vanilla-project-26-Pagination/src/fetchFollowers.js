const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data

  } catch (e) {
    console.log(e)
  }

}

export default fetchFollowers
