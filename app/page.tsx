'use client';

import React, { useEffect, useState } from 'react';
import Dropdown from './_components/Dropdown';
import Game from './_components/Game';
import Developer from './_components/Developer';
import Games from '../app/_interfaces/Games.interface';
import Developers from './_interfaces/Developers.interface';

export default function Home() {
  const [games, setGames] = useState<Games[]>([]);
  const [developers, setDevelopers] = useState<Developers[]>([]);
  const [genre, setGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('gameTitles');
  const [searchedType, setSearchedType] = useState('');

  const foundGames = games.map((game, i) => {
    if (game.background_image && game.metacritic) {
      return (
        <div key={i}>
          <Game game={game} />
        </div>
      );
    }
  });

  const foundDevelopers = developers.map((developer, i) => {
    if (developers && developer.image_background) {
      return (
        <div key={i}>
          <Developer name={developer.name} image={developer.image_background} />
        </div>
      );
    }
  });

  const handleSubmit = async () => {
    try {
      if (searchType === 'gameTitles') {
        setSearchedType('gameTitles');
        const response = await fetch('http://localhost:3000/api/get-games', {
          method: 'POST',
          body: JSON.stringify({
            title: searchTerm,
          }),
        });
        const data = await response.json();
        console.log('GAMES', data.results);
        setDevelopers([]);
        setGames(data.results);
      } else if (searchType === 'platforms') {
        setSearchedType('platforms');
        console.log('Platform Search!');
      } else if (searchType === 'developers') {
        setSearchedType('developers');
        console.log('Developer Search!');
        const response = await fetch(
          'http://localhost:3000/api/get-developers',
          {
            method: 'POST',
            body: JSON.stringify({
              developer: searchTerm,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        setGames([]);
        setDevelopers(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchTypeChange = (newType: string) => {
    setSearchType(newType);
  };

  useEffect(() => {
    console.log('Search Type: ', searchType);
  }, [searchType]);

  return (
    <div>
      <div className="text-center mb-6 mt-4">
        <input
          className="search-text"
          type="text"
          placeholder="search titles..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button onClick={handleSubmit}>Search</button>
        <Dropdown
          searchType={searchType}
          handleSearchTypeChange={handleSearchTypeChange}
        />
      </div>

      <div>{foundGames}</div>
      <div>{foundDevelopers}</div>
    </div>
  );
}
