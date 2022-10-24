// noinspection ExceptionCaughtLocallyJS

const endPoint = "https://simple-books-api.glitch.me/status";
// const apiKey = "";


const getData = async () => {

    try {
        // Request Data From Endpoint
        const results = await fetch(endPoint, {cache: "no-cache"});
        if (results.ok) {
            // Request JSON data if everything well
            const jsonResponse = await results.json();
            // Call Helper Function

        } else throw new Error(results.statusText);

    } catch (e) {
        console.log("lol")
        console.log(e)
    }


}


getData()

