'use client';

import { useEffect } from 'react';

export default function Page({ params }: { params: { id: number } }) {
  console.log(params);

  const fetchGame = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/get-game`, {
        method: 'POST',
        body: JSON.stringify({
          id: params.id,
        }),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGame();
  }, []);

  return (
    <div>
      <p>{`${params.id}`}</p>
    </div>
  );
}
