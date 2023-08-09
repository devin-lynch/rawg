export async function fetchGames() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
  const data = await response.json()
  return data.results
}