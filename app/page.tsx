'use client';

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log(apiKey);

  const fetchGames = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}`
      );
      const data = await response.json();
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  fetchGames();

  return <div>Games!</div>;
}
