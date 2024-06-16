import { MdEmail } from "react-icons/md";
import { TfiLinkedin, TfiEmail } from "react-icons/tfi";
import { VscGithubInverted, VscMail } from "react-icons/vsc";
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
          backSpeed={50} x
          attr="placeholder"
          loop>
          <input type="text" className="text-center w-[300px] bg-transparent focus-visible:outline-0" />
        </ReactTyped></h2>
      <div className="flex items-center gap-6 text-blue-500 mt-5">
        <a href="mailto:kauan_falima@hotmail.com" target="_blank"><MdEmail className="text-[35px]" /></a>
        <a href="https://www.linkedin.com/in/kauanfelipe96/" target="_blank"><TfiLinkedin className="text-[30px]" alt="Link para perfil do LinkedIn" /></a>
        <a href="https://github.com/kauanfelipe96" target="_blank"><VscGithubInverted className="text-[30px]" alt="Link para perfil no GitHub" /></a>
      </div>
      <button className="bg-blue-500 text-white font-bold rounded-full px-8 py-2 text-center mt-5">Curriculum Vitae</button>

    </section>
  )
}