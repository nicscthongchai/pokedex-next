import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type PokemonCardProps = {
  pokemonInfo: any;
};

export const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const { pokemonInfo } = props;

  const [info, setInfo] = useState<any>();

  const getPokemon = async () => {
    const result = await fetch(pokemonInfo.url);
    const data = await result.json();
    console.log(data);
    setInfo(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Link
        href={`/pokedex/${info?.id}`}
        className={twMerge(
          "w-40 text-center p-4 mx-auto",
          "cursor-pointer shadow-xl rounded-xl",
          "border border-black border-opacity-5"
        )}
      >
        <div className="w-full h-28 relative">
          {info && (
            <Image
              src={info.sprites.other["official-artwork"].front_default}
              alt="avatar"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          )}
        </div>
        <div className="text-lg font-semibold capitalize">
          {pokemonInfo.name}
        </div>
      </Link>
    </>
  );
};
