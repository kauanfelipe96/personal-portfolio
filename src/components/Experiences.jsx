import { PiBriefcaseDuotone, PiGraduationCapDuotone } from "react-icons/pi";

export default function Experiences() {
  return (
    <section className="dark:bg-slate-950 lg:px-20 px-5 py-20" id="experience">
      <h2 className="dark:text-slate-50 dark:bg-slate-950 text-[35px] text-blue-900 font-bold mb-5">Experiências</h2>
      <div className="flex xl:flex-row flex-col gap-10">
        <div className="xl:w-[50%] w-[100%] h-full dark:bg-slate-950 dark:border-blue-500 dark:border  bg-white rounded-xl py-10 px-8 shadow-xl justify-between gap-10">
          <div className="flex gap-5">
            <div className="dark:bg-slate-950 flex flex-col items-center">
              <PiBriefcaseDuotone className="text-[40px] text-blue-500" />
              <span className="h-[100%] w-[2px] bg-blue-400"></span>
            </div>
            <div className="dark:bg-slate-950 pb-5">
              <span className="dark:text-slate-50 text-sm text-blue-900 font-light">Julho 2023 - Dezembro 2023</span>
              <h3 className="dark:text-slate-50 font-bold text-[25px] text-blue-900"> Bono Energia </h3>
              <h4 className="dark:text-slate-50 font-semibold text-[18px] text-blue-900 mb-2">(Analista de Sistemas Pleno)</h4>
              <ul className="dark:text-slate-50 text-blue-900 text-[18px] mb-2 font-light">
                <li>- Desenvolvimento de uma API com integração com WebService, utilizando NetCore.</li>
                <li>- Criação e manutenção de uma estrutura de banco de dados SQL.</li>
                <li>- Implementação de políticas de segurança na API.</li>
                <li>- Utilização da metodologia Scrum.</li>
                <li>- Deploy em ambiente de homologação e produção.</li>
                <li>- Colaboração na criação de um ambiente otimizado para o PowerBi.</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <PiBriefcaseDuotone className="text-[40px] text-blue-500" />
              <span className="h-[100%] w-[2px] bg-blue-400"></span>
            </div>
            <div className="pb-5">
              <span className="dark:text-slate-50 text-sm text-blue-900 font-light">Janeiro 2021 - Abril 2022</span>
              <h3 className="dark:text-slate-50 font-bold text-[25px] text-blue-900"> Dribion Software </h3>
              <h4 className="dark:text-slate-50 font-semibold text-[18px] text-blue-900 mb-2">(Suporte Técnico)</h4>
              <ul className="dark:text-slate-50 text-blue-900 text-[18px] mb-2 font-light">
                <li>- Treinamento aos clientes e novos funcionários.</li>
                <li>- Gestão Financeira</li>
                <li>- Faturamento</li>
                <li>- Controle de Estoque</li>
                <li>- Notas fiscais: Nfe, NFCe, MDFe, CTe e CCe.</li>
                <li>- Básico de SQL Server.</li>
                <li>- Breve experiência como Tester.</li>
                <li>- Supervisão da instalação de programas e sistemas de software.</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <PiBriefcaseDuotone className="text-[40px] text-blue-500" />
              <span className="h-[100%] w-[2px] bg-blue-400"></span>
            </div>
            <div>
              <span className="dark:text-slate-50 text-sm text-blue-900 font-light">Abril 2015 - Fevereiro 2020</span>
              <h3 className="dark:text-slate-50 font-bold text-[25px] text-blue-900"> Cia Iguaçu de Café Solúvel </h3>
              <h4 className="dark:text-slate-50 font-semibold text-[18px] text-blue-900 mb-2">(Auxiliar Administrativo Contabil)</h4>
              <ul className="dark:text-slate-50 text-blue-900 text-[18px] mb-2 font-light">
                <li>- Conferencia de relatórios e levantamentos.</li>
                <li>- Organização de arquivos e almoxarifado do setor.</li>
                <li>- Serviços Externos.</li>
                <li>- Organização de documentos e balancetes.</li>
                <li>- Experiência com sistema SAP R3.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="xl:w-[50%] w-[100%] h-full dark:bg-slate-950 dark:border-blue-500 dark:border bg-white rounded-xl py-10 px-8 shadow-xl justify-between gap-10">
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <PiGraduationCapDuotone className="text-[50px] text-yellow-400" />
              <span className="h-[100%] w-[2px] bg-yellow-400"></span>
            </div>
            <div className="pb-5">
              <span className="dark:text-slate-50 text-sm text-blue-900 font-light">Julho 2016 - Presente</span>
              <h3 className="dark:text-slate-50 font-bold text-[25px] text-blue-900">Universidade Tecnológica Federal do Paraná</h3>
              <h4 className="dark:text-slate-50 font-semibold text-[18px] text-blue-900 mb-2">Análise e Desenvolvimento de Sistemas</h4>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <PiGraduationCapDuotone className="text-[50px] text-yellow-400" />
              <span className="h-[100%] w-[2px] bg-yellow-400"></span>
            </div>
            <div className="pb-5">
              <span className="dark:text-slate-50 text-sm text-blue-900 font-light">2009 - 2011</span>
              <h3 className="dark:text-slate-50 font-bold text-[25px] text-blue-900">Cursos de Especialização</h3>
              <ul className="dark:text-slate-50 text-blue-900 text-[18px] mb-2 font-light">
                <li>- Informática básica e avançada.</li>
                <li>- Especialização em hardware.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}