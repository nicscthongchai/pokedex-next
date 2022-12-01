import Link from "next/link";
import { Button } from "../components/Button";
import { NextCustomPage } from "../types/next";

const HomePage: NextCustomPage = () => {
  return (
    <div className="h-screen flex justify-center items-center gap-2.5">
      <Link href="https://youtube.com" target="_blank">
        <Button className="bg-red-600 text-white">Youtube</Button>
      </Link>
      <Link href="/pokedex">
        <Button>Pokedex</Button>
      </Link>
    </div>
  );
};

export default HomePage;
