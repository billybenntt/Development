const followersContainer = document.querySelector('.container')

const displayData = (data) => {

  const newFollowers = data.map((item) => {

      const { avatar_url: img, html_url: url, login: userName } = item
      return `<article class="card">
                    <img src="${img}" alt="login">
                    <h4>${userName}</h4>
                    <a href="${url}" class="btn">${userName}</a>
                </article>`
    }
  )
  followersContainer.innerHTML = newFollowers.join('')
}

export default displayData
