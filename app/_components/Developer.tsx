'use client';

export default function Developer({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <div className="text-center mb-10">
      <p>{name}</p>
      {image ? (
        <div className="flex justify-center items-center">
          <img src={image} alt={name} className="w-64" />
        </div>
      ) : null}
    </div>
  );
}
