import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../components/Button";
import { PokedexLayout } from "../../components/MainLayout";
import { PokemonCard } from "../../components/PokemonCard";
import { NextCustomPage } from "../../types/next";

const HomePage: NextCustomPage = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const getPokemons = async (page: number = 1) => {
    const limit = 20;
    const offset = limit * (page - 1);
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await result.json();
    setPokemons(data.results);
  };

  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = +e.target.value;
    setPage(page > 0 ? page : 1);
  };

  const handleClickNext = () => {
    const maxPage = 99;
    setPage((page) => (page + 1 <= maxPage ? page + 1 : maxPage));
  };

  const handleClickPrevious = () => {
    setPage((page) => (page > 1 ? page - 1 : 1));
  };

  useEffect(() => {
    getPokemons(page);
  }, [page]);

  return (
    <div>
      {/* Cards */}
      <div
        className={twMerge(
          "grid grid-cols-2 gap-2.5 gap-y-5 w-full",
          "sm:grid-cols-3 lg:grid-cols-5",
          "w-[840px] h-[756px]"
        )}
      >
        {pokemons.map((pokemon, index) => {
          const id = pokemon.url
            .replace("https://pokeapi.co/api/v2/pokemon/", "")
            .replace("/", "");
          return <PokemonCard key={index} pokemonInfo={{ ...pokemon, id }} />;
        })}
      </div>

      {/* Navigator */}
      <div className="flex justify-between mt-10">
        <Button
          className={twMerge(
            "w-[120px]",
            page === 1 && "opacity-30 cursor-not-allowed"
          )}
          onClick={handleClickPrevious}
        >
          Previous
        </Button>
        <input
          type="text"
          className="text-center"
          value={page}
          onChange={handleChangePage}
        />
        <Button className="w-[120px]" onClick={handleClickNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

HomePage.Layout = PokedexLayout;

export default HomePage;
