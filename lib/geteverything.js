export default async function getEverything(query) {
    const url = "https://newsapi.org/v2/everything?q="+query+"&apiKey=c4238b27c8a44e5fa8ae6859a0a0eebc";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        return data;
         // Assuming you want to extract the articles from the response
    } catch (error) {
        console.error("Error fetching news:", error);
        return []; // Return empty array in case of error
    }
}
