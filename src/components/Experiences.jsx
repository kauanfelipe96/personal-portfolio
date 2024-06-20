import { PiBriefcaseDuotone } from "react-icons/pi";

export default function Experiences() {
  return (
    <section className="px-20 py-20" id="experience">
      <h2 className="text-[35px] text-blue-900 font-bold mb-5">Experiências</h2>
      <div className="flex xl:flex-row flex-col gap-10">
        <div className="xl:w-[50%] w-[100%] h-full bg-white rounded-xl py-10 px-8 shadow-xl justify-between gap-10">
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <PiBriefcaseDuotone className="text-[50px] text-blue-500" />
              <span className="h-[100%] w-[2px] bg-blue-400"></span>
            </div>
            <div className="pb-5">
              <h3 className="text-sm text-blue-900 font-light">Julho 2023 - Dezembro 2023</h3>
              <p className="font-bold text-[25px] text-blue-900"> Bono Energia </p>
              <p className="font-semibold text-[18px] text-blue-900 mb-2">(Analista de Sistemas Pleno)</p>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Desenvolvimento de uma API com integração com WebService, utilizando NetCore.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Criação e manutenção de uma estrutura de banco de dados SQL.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Implementação de políticas de segurança na API.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Utilização da metodologia Scrum.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Deploy em ambiente de homologação e produção.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Colaboração na criação de um ambiente otimizado para o PowerBi.</h4>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <PiBriefcaseDuotone className="text-[50px] text-blue-500" />
              <span className="h-[100%] w-[2px] bg-blue-400"></span>
            </div>
            <div className="pb-5">
              <h3 className="text-sm text-blue-900 font-light">Janeiro 2021 - Abril 2022</h3>
              <p className="font-bold text-[25px] text-blue-900"> Dribion Software </p>
              <p className="font-semibold text-[18px] text-blue-900 mb-2">(Suporte Técnico)</p>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Treinamento aos clientes e novos funcionários.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Gestão Financeira</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Faturamento</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Controle de Estoque</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Notas fiscais: Nfe, NFCe, MDFe, CTe e CCe.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Básico de SQL Server.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Breve experiência como Tester.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Supervisão da instalação de programas e sistemas de software.</h4>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center">
              <PiBriefcaseDuotone className="text-[50px] text-blue-500" />
              <span className="h-[100%] w-[2px] bg-blue-400"></span>
            </div>
            <div>
              <h3 className="text-sm text-blue-900 font-light">Abril 2015 - Fevereiro 2020</h3>
              <p className="font-bold text-[25px] text-blue-900"> Cia Iguaçu de Café Solúvel </p>
              <p className="font-semibold text-[18px] text-blue-900 mb-2">(Auxiliar Administrativo Contabil)</p>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Conferencia de relatórios e levantamentos.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Organização de arquivos e almoxarifado do setor.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Serviços Externos.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Organização de documentos e balancetes.</h4>
              <h4 className="text-blue-900 text-[18px] mb-2 font-light">- Experiência com sistema SAP R3.</h4>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] w-[100%] h-full bg-white rounded-xl py-10 px-8 shadow-xl flex justify-between gap-10">
        </div>


      </div>
    </section>
  )
}