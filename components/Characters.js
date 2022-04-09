import React from 'react';
import Character from './Character';

function Characters({ data }) {
  return (
    <div className="p-10 grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3">
      {data.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Characters;
