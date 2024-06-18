import persona from '../assets/images/persona.png'

export default function About() {
  return (
    <section className="px-20" id="about">
      <h2 className="text-[35px] text-blue-900 font-bold">Sobre mim</h2>
      <div className="flex sm:flex-row flex-col items-center justify-between gap-6 mt-5">
        <img src={persona} alt="Avatar" className="w-[200px] h-[200px]" />
        <div className="w-full bg-white rounded-xl py-10 px-8 shadow-xl flex justify-between gap-10">
          <p className="text-blue-900 w-[50%] text-justify">Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com uma sólida formação
            acadêmica em Análise e Desenvolvimento de Sistemas e experiência prática em diversas empresas, estou
            comprometido em impulsionar o sucesso dos projetos em que me envolvo.</p>
          <div className="w-[50%]">
            <div className="mb-7">
              <h3 className="font-bold text-blue-900 leading-[1px]">Front-end</h3>
              <h4 className="text-end text-blue-900">70%</h4>
              <div className="w-[70%] bg-purple-500 h-[7px] rounded-full"></div>
            </div>
            <div className="mb-7">
              <h3 className="font-bold text-blue-900 leading-[1px]">Back-end</h3>
              <h4 className="text-end text-blue-900">85%</h4>
              <div className="w-[85%] bg-cyan-500 h-[7px] rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 leading-[1px]">Databases</h3>
              <h4 className="text-end text-blue-900">80%</h4>
              <div className="w-[80%] bg-rose-500 h-[7px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}