'use client';

interface GameProp {
  id: number;
  name: string;
  released: string;
  metacritic: number;
  background_image: string;
}

export default function Game({ game }: { game: GameProp }) {
  return (
    <div className="text-center mb-10">
      <a href={`/games/${game.id}`}>
        <p>{game.name}</p>
        <div className="flex justify-center items-center">
          <img src={game.background_image} alt={game.name} className="w-64" />
        </div>
      </a>
    </div>
  );
}
