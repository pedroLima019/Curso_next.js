import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center p-4 w-full ">
      <div className="container mx-auto flex flex-col justify-center items-center gap-5">
        <Image
          src="/task.jpg"
          width={500}
          height={500}
          alt="imagem tarefas"
          objectFit="cotain"
          priority
        />
        <div className="w-full flex flex-col  justify-center items-center gap-3">
          <h1 className="text-3xl font-black">
            Bem vindo ao sistemas de gerenci amento de tarefas
          </h1>
          <p className="text-xl ">Organize suas tarefas</p>
        </div>

        <div className="w-full flex justify-center items-center space-x-5">
          <span className="bg-zinc-900 p-3 w-[200px] text-xs md:text-sm rounded-2xl text-white text-center hover:bg-zinc-800 duration-300 transition-all">
            +5mil posts
          </span>
          <span className="bg-zinc-900 p-3 w-[200px] text-xs md:text-sm  rounded-2xl text-white text-center  hover:bg-zinc-800 duration-300 transition-all">
            +10mil comentários
          </span>
        </div>
      </div>
    </main>
  );
}
