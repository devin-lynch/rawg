'use client';

import { useEffect, useState } from 'react';
import Developers from '@/app/_interfaces/Developers.interface';

export default function Page({ params }: { params: { id: number } }) {
  const [developer, setDeveloper] = useState<Developers>();

  const fetchDeveloper = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/get-developer`, {
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

  const buildDeveloper = async () => {
    let builtDeveloper = await fetchDeveloper();
    console.log(builtDeveloper);
    setDeveloper(builtDeveloper);
  };

  useEffect(() => {
    buildDeveloper();
    console.log(developer);
  }, []);

  const displayDeveloperInfo = developer ? (
    <div>
      <div className="flex justify-center">
        <img
          src={developer.image_background}
          alt={developer.name}
          className="w-2/4"
        />
      </div>
      <div className="text-center">
        <p className="text-4xl">{developer.name}</p>
        <p>{developer.description}</p>
      </div>
    </div>
  ) : null;

  return <div>{displayDeveloperInfo}</div>;
}
