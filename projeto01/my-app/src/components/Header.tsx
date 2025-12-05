import Link from "next/link";

const Header = () => {
  return (
    <header className=" flex justify-center w-full p-4 h-15 shadow-lg ">
      <section className="flex justify-between px-3 container mx-auto lg:justify-around ">
        <nav className="flex space-x-6">
          <Link href="/">
            <h1 className="font-bold">
              TodoDias<strong className="text-rose-700">+</strong>
            </h1>
          </Link>
          <Link
            href="/dashboard"
            className="bg-zinc-800 p-3 flex items-center rounded-xl text-white text-xs hover:bg-amber-500 transition-all duration-300 "
          >
            Meu painel
          </Link>
        </nav>
        <button className="borde-0 bg-amber-500 p-1 rounded-lg text-xs text-white  w-20 hover:bg-zinc-700 hover:text-white duration-300 transition-all">
          Acessar
        </button>
      </section>
    </header>
  );
};

export default Header;
