import { useRouter } from "next/router";
import { AnotherLayout } from "../../components/AnotherLayout";
import { NextCustomPage } from "../../types/next";

const PokemonInfoPage: NextCustomPage = () => {
  const router = useRouter();

  return <div>Pokemon Info Page - {router.query.pokemonId}</div>;
};

PokemonInfoPage.Layout = AnotherLayout;

export default PokemonInfoPage;
