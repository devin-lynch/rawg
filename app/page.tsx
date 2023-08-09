'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [games, setGames] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${apiKey}`
        );
        const data = await response.json();
        console.log(data.results);
        setGames(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, []);

  const foundGames = games.map((game, i) => {
    return (
      <div key={i} className="text-center mb-10">
        <p>{game.name}</p>
        <p>Metacritic score: {game.metacritic}</p>
        <div className="flex justify-center items-center">
          <img src={game.background_image} alt={game.name} className="w-64" />
        </div>
      </div>
    );
  });

  return <div>{foundGames}</div>;
}
