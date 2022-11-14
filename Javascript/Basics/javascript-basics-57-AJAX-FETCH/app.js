// ------------- SELECT DATA -------------

const url = './api/people.json'

// ------------- FETCHING URL DATA  -------------

fetch(url).then((resp) => {
  console.log('Then-> Response')
  /* Useful Values */
  let connectionData = {
    status: resp.status,
    statusText: resp.statusText,
    ok: resp.ok
  }
  console.log(connectionData)
  /* Return JSON Data Promise */
  return resp.json()
}).then((data) => {
  console.log('Then-> Data')
  /* Access Promise Parsed JSON Data*/
  console.log(data)
}).catch((error) => {
  console.log('Catch-> Error')
  console.log(error)
})


