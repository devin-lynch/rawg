'use client';

interface DeveloperProp {
  id: number;
  name: string;
  image_background: string;
  games_count: number;
  top_games: number[];
}

export default function Developer({ developer }: { developer: DeveloperProp }) {
  return (
    <div className="text-center mb-10">
      <a href={`/developers/${developer.id}`}>
        <p>{developer.name}</p>
        {developer.image_background ? (
          <div className="flex justify-center items-center">
            <img
              src={developer.image_background}
              alt={developer.name}
              className="w-64"
            />
          </div>
        ) : null}
      </a>
    </div>
  );
}
