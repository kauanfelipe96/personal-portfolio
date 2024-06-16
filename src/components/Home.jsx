import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section className="h-[100vh] w-[calc(100vw-250px)] flex flex-col items-center justify-center" id="home">
      <h1 className="text-[35px] text-blue-900 font-bold">Kauan Felipe</h1>
      <h2 className="mt-3">
        <ReactTyped strings={[
          "Sou desenvolvedor full stack júnior",
          "Sou apaixonado por código",
          "Sou amante dos games",
        ]}
          typeSpeed={40}
          backSpeed={50}
          loop>
        </ReactTyped></h2>
      <div className="flex items-center gap-6 text-blue-500 mt-5">
        <a href="mailto:kauan_falima@hotmail.com" target="_blank"><FaEnvelope className="text-[25px] hover:text-blue-800" /></a>
        <a href="https://github.com/kauanfelipe96" target="_blank"><FaGithub className="text-[25px] hover:text-black" alt="Link para perfil no GitHub" /></a>
        <a href="https://www.linkedin.com/in/kauanfelipe96/" target="_blank"><FaLinkedinIn className="text-[25px] hover:text-blue-800" alt="Link para perfil do LinkedIn" /></a>
      </div>
      <button className="bg-blue-500 text-white font-bold rounded-full px-8 py-2 text-center mt-5">Curriculum Vitae</button>

    </section>
  )
}