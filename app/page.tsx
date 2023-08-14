'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [games, setGames] = useState([]);
  const [gameTitle, setGameTitle] = useState('');

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

  const handleInputChange = (e) => {
    setGameTitle(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      console.log('hi');
      const response = await fetch('http://localhost:3000/api/get-games', {
        method: 'POST',
        body: JSON.stringify({
          title: gameTitle,
        }),
      });
      const data = await response.json();
      console.log(data);
      setGames(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-center mb-6 mt-4">
        <input
          className="search-text"
          type="text"
          placeholder="search titles..."
          onChange={(e) => handleInputChange(e)}
          value={gameTitle}
        />
        <button onClick={handleSubmit}>search</button>
      </div>
      <div>{foundGames}</div>
    </div>
  );
}
