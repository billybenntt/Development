const baseUrl = "https://api.themoviedb.org/3/"
const endpoint = "genre/movie/list"
const queryParams = "?api_key="
const apiKey = "846b66a330f0f052e33860cf2c6423f4"
const url = `${baseUrl}${endpoint}${queryParams}${apiKey}`




const getGenres = async () => {

    try {
        const request = await fetch(url)
        if (request.ok) {
            const genres = await request.json()
            console.log(genres)
        }else throw new Error(request.statusText)
    } catch (e) {
        console.log(e.message)
    }

}


getGenres()




const targetBtn = document.getElementById("playBtn")
const genresForm = document.getElementById("genres")

targetBtn.addEventListener("click", () => {
    console.log(genresForm.options);
console.log(1);
})


