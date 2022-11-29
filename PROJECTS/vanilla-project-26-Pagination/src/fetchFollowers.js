import backup from './data.js'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {
  try {
    /*Fetch Data */
    const response = await fetch(url)

    /* Return API or Backup*/
    if (response.status === 200) {
      return await response.json()
    } else {
      return backup
    }

  } catch (error) {
    console.log(error)
  }

}

export default fetchFollowers
