const apiKey = process.env.REACT_APP_API_KEY;


export async function fetchAllArticles() {
  let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
  let data = await response.json()
  return data
}