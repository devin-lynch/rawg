'use client';

export default function Game({ game }) {
  return (
    <div className="text-center mb-10">
      <a href={`/games/${game.id}`}>
        <p>{game.name}</p>
        <p>Released: {game.released}</p>
        <p>Metacritic score: {game.metacritic}</p>
        <div className="flex justify-center items-center">
          <img src={game.background_image} alt={game.name} className="w-64" />
        </div>
      </a>
    </div>
  );
}
