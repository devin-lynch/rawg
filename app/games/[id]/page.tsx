'use client';

import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: number } }) {
  const [game, setGame] = useState();

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
    setGame(builtGame);
  };

  useEffect(() => {
    buildGame();
  }, []);

  return (
    <div>
      <p>{`${params.id}`}</p>
      {game ? <p>{game.id}</p> : null}
    </div>
  );
}
