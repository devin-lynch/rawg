'use client';

import { useEffect, useState } from 'react';
import Dropdown from './_components/Dropdown';

export default function Home() {
  const [games, setGames] = useState([]);
  const [genre, setGenre] = useState('');
  const [developers, setDevelopers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('gameTitles');
  const [searchedType, setSearchedType] = useState('');

  const foundGames = games.map((game, i) => {
    if (game.background_image && game.metacritic) {
      return (
        <div key={i} className="text-center mb-10">
          <p>{game.name}</p>
          <p>Released: {game.released}</p>
          <p>Metacritic score: {game.metacritic}</p>
          <div className="flex justify-center items-center">
            <img src={game.background_image} alt={game.name} className="w-64" />
          </div>
        </div>
      );
    }
  });

  const foundDevelopers = developers.map((developer, i) => {
    if (developers && developer.image_background) {
      return (
        <div key={i} className="text-center mb-10">
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
        </div>
      );
    }
  });

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
        console.log(data);
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
    // the searchType was always one step behind when console logging here, which is why it was moved to a useEffect
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
          onChange={(e) => handleInputChange(e)}
          value={searchTerm}
        />
        <button onClick={handleSubmit}>search</button>
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
