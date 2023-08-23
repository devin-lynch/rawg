'use client';

import { useEffect, useState } from 'react';
import Games from '@/app/_interfaces/Games.interface';
export default function Page({ params }: { params: { id: number } }) {
  const [game, setGame] = useState<Games>();

  const fetchGame = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/get-game`, {
        method: 'POST',
        body: JSON.stringify({
          id: params.id,
        }),
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const buildGame = async () => {
    let builtGame = await fetchGame();
    console.log(builtGame);
    setGame(builtGame);
  };

  useEffect(() => {
    buildGame();
  }, []);

  const displayGameInfo = game ? (
    <div className="">
      <div className="flex justify-center">
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className="text-center">
        <p className="text-4xl">{game.name}</p>
        {game.esrb_rating.name ? (
          <p className="text-xl">Rated {game.esrb_rating.name}</p>
        ) : null}
        <p className="text-xl">{game.released}</p>
        <p className="text-xl">Metacritic: {game.metacritic}</p>
        <p className="text-xl">
          <a href={game.website}>Website</a>
        </p>
        <p className="text-xl">
          <a href={game.reddit_url}>{game.reddit_name} &#40;subreddit&#41;</a>
        </p>
      </div>
    </div>
  ) : null;

  return <div>{displayGameInfo}</div>;
}
