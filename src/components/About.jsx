import persona from '../assets/images/persona.png'

export default function About() {
  return (
    <section className="dark:bg-slate-950 lg:px-20 px-5 py-20" id="about">
      <h2 className="dark:bg-slate-950 dark:text-slate-50 text-[35px] text-blue-900 font-bold">Sobre mim</h2>
      <div className="flex xl:flex-row flex-col items-center justify-between gap-6 mt-5">
        <img src={persona} alt="Avatar" className="w-[200px] h-[200px]" />
        <div className="dark:border-blue-500 dark:border dark:bg-slate-950 dark:text-slate-50 w-full bg-white rounded-xl py-10 px-8 shadow-xl flex xl:flex-row flex-col justify-between gap-10">
          <p className="dark:bg-slate-950 dark:text-slate-50 text-blue-900 xl:w-[50%] w-[100%] text-justify">Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Cursando Análise e Desenvolvimento de Sistemas e com experiência prática em diversas empresas, estou
            comprometido em impulsionar o sucesso dos projetos em que me envolvo.</p>
          <div className="xl:w-[50%] w-[100%]">
            <div className="mb-7">
              <h3 className="dark:text-slate-50 font-bold text-blue-900 leading-[1px]">Front-end</h3>
              <h4 className="dark:text-slate-50 text-end text-blue-900">50%</h4>
              <div className="w-[70%] bg-purple-500 h-[7px] rounded-full"></div>
            </div>
            <div className="mb-7">
              <h3 className="dark:text-slate-50 font-bold text-blue-900 leading-[1px]">Back-end</h3>
              <h4 className="dark:text-slate-50 text-end text-blue-900">85%</h4>
              <div className="w-[85%] bg-cyan-500 h-[7px] rounded-full"></div>
            </div>
            <div>
              <h3 className="dark:text-slate-50 font-bold text-blue-900 leading-[1px]">Databases</h3>
              <h4 className="dark:text-slate-50 text-end text-blue-900">75%</h4>
              <div className="w-[80%] bg-rose-500 h-[7px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}