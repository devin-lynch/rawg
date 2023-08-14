'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/get-games`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const foundGames = games.map((game, i) => {
    return (
      <div key={i} className="text-center mb-10">
        <p>{game.name}</p>
        <p>Released: {game.released}</p>
        <p>Metacritic score: {game.metacritic}</p>
        <div className="flex justify-center items-center">
          <img src={game.background_image} alt={game.name} className="w-64" />
        </div>
      </div>
    );
  });

  return <div>{foundGames}</div>;
}
