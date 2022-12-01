import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type PokemonCardProps = {
  pokemonInfo: any;
};

export const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const { pokemonInfo } = props;

  return (
    <>
      <Link
        href={`/pokedex/${pokemonInfo.id}`}
        className={twMerge(
          "w-40 text-center p-4 mx-auto",
          "cursor-pointer shadow-xl rounded-xl",
          "border border-black border-opacity-5",
          "relative overflow-hidden"
        )}
      >
        <div className="w-full h-28 relative">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
            alt="avatar"
            className="mx-auto"
            width={112}
            height={112}
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="text-lg font-semibold capitalize">
          {pokemonInfo.name}
        </div>
      </Link>
    </>
  );
};
