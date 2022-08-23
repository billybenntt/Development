const baseUrl = "https://api.themoviedb.org/3/"
const endpoint = "genre/movie/list"
const queryParams = "?api_key="
const apiKey = "846b66a330f0f052e33860cf2c6423f4"
const url = `${baseUrl}${endpoint}${queryParams}${apiKey}`




const getGenres = async () => {
    try {
        // Send Request
        const request = await fetch(url)

        // If Request Succeful Assign Data to variable
        if (request.ok) {
            const genres = await request.json()
            console.log(genres)
        }
        // Else Throw an Error showing the fail Reason
        else throw new Error(request.statusText)
    } catch (e) {

        // Catch Error and Log it to console
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


