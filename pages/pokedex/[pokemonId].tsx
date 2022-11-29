import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { NextCustomPage } from "../../types/next";

const PokemonInfoPage: NextCustomPage = () => {
  const router = useRouter();

  return <div>Pokemon Info Page - {router.query.pokemonId}</div>;
};

PokemonInfoPage.Layout = MainLayout;

export default PokemonInfoPage;
