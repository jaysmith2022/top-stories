const apiKey = process.env.REACT_APP_API_KEY;

console.log(apiKey)

// export const fetchAllArticles =  (data) => {
//   return fetch(
//     `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
//     // {
//     //   headers: {
//     //     Authorization: "Api-Key 4v2LTEZm4ageFjQ2BiCEYyGuPdjjqqRA",
//     //   },
//     // }
//   );
// };

// console.log(apiKey);
// const checkError = (res) => {
//   if (!res.ok) {
//     throw new Error(`${res.status}`);
//   }
//   return res.json();
// };

// export const fetchAllArticles = (data) => {
//   return fetch(
//     `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
//   ).then((response) => checkError(response));
// };

export async function fetchAllArticles() {
  let response = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`)
  let data = await response.json()
  return data
}