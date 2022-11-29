import { useEffect, useState } from "react";
import { MainLayout } from "../components/MainLayout";
import { PokemonCard } from "../components/PokemonCard";
import { NextCustomPage } from "../types/next";
import { twMerge } from "tailwind-merge";

const HomePage: NextCustomPage = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  const getPokemons = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await result.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div
      className={twMerge(
        "grid grid-cols-2 gap-2.5 gap-y-5 w-full",
        "sm:grid-cols-3 lg:grid-cols-5"
      )}
    >
      {pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} pokemonInfo={pokemon} />;
      })}
    </div>
  );
};

HomePage.Layout = MainLayout;

export default HomePage;
