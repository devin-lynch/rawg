'use client';

export default function Developer({ name, image }) {
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
