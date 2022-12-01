import { useRouter } from "next/router";
import { PokedexLayout } from "../../components/MainLayout";
import { NextCustomPage } from "../../types/next";

const PokemonInfoPage: NextCustomPage = () => {
  const router = useRouter();

  return <div>Pokemon Info Page - {router.query.pokemonId}</div>;
};

PokemonInfoPage.Layout = PokedexLayout;

export default PokemonInfoPage;
