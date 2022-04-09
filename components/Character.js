import React from 'react';

function Character({ character }) {
  console.log(character.name);
  return (
    <div className="max-w-sm text-black rounded-md overflow-hidden my-5 shadow-lg bg-gray-100 hover:scale-125">
      <div className="w-full">
        <img
          className="object-cover w-full h-[250px] sm:h-[350px]"
          src={character.imageUrl}
          alt=""
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-center text-2xl mb-2">
          {character.firstName + ' ' + character.lastName}
        </div>
        <div className="">
          <h3>{`Title: ${character.title}`}</h3>
          <h3>{`Family: ${character.family}`}</h3>
        </div>
      </div>
    </div>
  );
}

export default Character;
