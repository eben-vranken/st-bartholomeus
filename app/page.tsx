import Sidebar from "@/components/UI/Sidebar";
import Link from "next/link";
import { FunctionComponent } from "react";
import Image from "next/image";

// Images
import TargetHit from "@/public/stock-images/target-hit.jpg";
import StBartholomeusLogo from "@/public/st-bartholomeus-logo.png";
import LogoLukRondKleur from "@/public/Logo-LUK-Rond-Kleur.png";
import { MagnifyingGlass, Star, Target, Trophy } from "@phosphor-icons/react/dist/ssr";
import BlogPost from "@/components/Blog/BlogPost";
import BlogFeed from "@/components/Blog/BlogFeed";

const Home: FunctionComponent = () => {
  return (
    <main className="w-full flex justify-between gap-8 max-lg:gap-x-4 max-md:flex-col relative">
      {/* Left Wrapper */}
      <section className="flex flex-col w-full">
        {/* Banner */}
        <section className="relative flex flex-col w-full bg-cover bg-center cursor-pointer brightness-90 hover:brightness-75 transition-all">
          <section className="absolute inset-0 backdrop-blur-sm z-10 flex items-center justify-center flex-col gap-y-4">
            {/* Logo */}
            <Image
              src={StBartholomeusLogo}
              alt="st-bartholomeus-logo"
              className="w-64 max-md:w-32" />
            <h1 className="font-bold text-2xl max-md:text-lg text-white">St. Batholomeus Kruisbooggilde</h1>
          </section>

          {/* Background Image */}
          <Image
            src={TargetHit}
            alt=""
            className="rounded w-full h-96 max-md:h-64 brightness-50 object-cover"
          />
        </section>

        {/* Blog */}
        <BlogFeed />
      </section >

      {/* Sidebars */}
      <section className="flex flex-col w-1/5 max-lg:w-4/12 gap-y-2 h-fit pt-2 -mt-2 max-md:w-full sticky top-0">
        {/* Lid van LUK */}
        <Sidebar styles={"flex items-center justify-center"}>
          <Image src={LogoLukRondKleur} alt="Logo Luk" className="w-full" />

          <section className="flex">
            <span className="text-center brightness-50"> Lid van <Link className="underline text-link brightness-150" href={"https://www.kruisboog-luk.be/"} target="_blank">LUK</Link>, de officiële sportbond voor kruisboogschieten in Vlaanderen en Brussel.</span>
          </section>
        </Sidebar>

        <Sidebar styles="flex justify-center">
          {/* Map */}
          <section className="min-w-max aspect-square bg-primary opacity-75 rounded">

          </section>

          {/* Extra Information */}
          <h2 className="font-bold mb-2 border-b-2 w-fit border-text/25">Ook interessant</h2>

          <ul className="flex flex-col gap-y-1 list-inside list-disc break-words ">
            <li>
              <Link href={"/schuttersgilden-van-vlaanderen"} className="text-link underline opacity-80 hover:opacity-100 transition-opacity">Geschiedenis van de Kruisboog</Link>
            </li>
            <li>
              <Link href={"/schuttersgilden-van-vlaanderen"} className="text-link underline opacity-80 hover:opacity-100 transition-opacity">Tienen en St. Bartholomeusgilde</Link>
            </li>
            <li>
              <Link href={"/schuttersgilden-van-vlaanderen"} className="text-link underline opacity-80 hover:opacity-100 transition-opacity">Schuttersgilden van Vlaanderen</Link>
            </li>
          </ul>
        </Sidebar>
      </section>
    </main >
  );
}

export default Home
