import {
  Plus,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-gray-700" />
            <h1 className="text-3xl font-bold text-gray-900">
              Projetos Sociais
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gerencie e acompanhe
            projetos sociais de forma
            simples e organizada.
            Cadastre novos projetos e
            visualize todos os projetos
            em andamento.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="border border-black/10 bg-white p-4 rounded-md-lg">
            <form className="flex flex-col gap-4 p-3">
              <div className="flex items-center gap-4 mb-2">
                <Plus className="w-6 h-6 text-primary" />
                <p className="text-primary text-2xl font-semibold">
                  Cadastrar Novo Projeto
                </p>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-primary mb-1"
                  htmlFor="nome"
                >
                  Nome do Projeto
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite o nome do projeto"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-primary mb-1"
                  htmlFor="descricao"
                >
                  Descrição
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Descreva o projeto"
                  rows={3}
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full">
                  <label
                    className="block text-sm font-medium text-primary mb-1"
                    htmlFor="area"
                  >
                    Área Temática
                  </label>
                  <select
                    id="area"
                    name="area"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue=""
                  >
                    <option
                      value=""
                      disabled
                    >
                      Selecione uma área
                    </option>
                    <option value="educacao">
                      Educação
                    </option>
                    <option value="saude">
                      Saúde
                    </option>
                    <option value="meio-ambiente">
                      Meio Ambiente
                    </option>
                    <option value="assistencia-social">
                      Assistência Social
                    </option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    className="block text-sm font-medium text-primary mb-1"
                    htmlFor="dataInicio"
                  >
                    Data de Início
                  </label>
                  <input
                    id="dataInicio"
                    name="dataInicio"
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 bg-primary text-white px-4 py-2 rounded-md cursor-pointer hover:bg-primary/90 transition"
              >
                Cadastrar Projeto
              </button>
            </form>
          </div>
          <div>
            <p className="text-xl mt-2 font-medium">
              Projetos Cadastrados
            </p>
            <p className="text-primary text-sm mt-3">
              Lista de todos os projetos
              sociais registrados
            </p>

            <div>
              <div className="mt-4 flex flex-col gap-4">
                {[
                  {
                    nome: "Projeto Educação para Todos",
                    descricao:
                      "Oferece aulas de reforço escolar para crianças em situação de vulnerabilidade.",
                    dataInicio:
                      "2024-05-01",
                    area: "Educação",
                  },
                  {
                    nome: "Saúde em Movimento",
                    descricao:
                      "Campanhas de vacinação e orientação em comunidades carentes.",
                    dataInicio:
                      "2024-06-10",
                    area: "Saúde",
                  },
                  {
                    nome: "Verde Esperança",
                    descricao:
                      "Plantio de árvores e educação ambiental em bairros urbanos.",
                    dataInicio:
                      "2024-04-15",
                    area: "Meio Ambiente",
                  },
                ].map(
                  (projeto, idx) => (
                    <div
                      key={idx}
                      className="border border-black/10 bg-white rounded-md-lg p-4 max-w-[400px]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {projeto.nome}
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {projeto.area}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        {
                          projeto.descricao
                        }
                      </p>
                      <div className="text-xs text-gray-500">
                        Início:{" "}
                        {new Date(
                          projeto.dataInicio
                        ).toLocaleDateString(
                          "pt-BR"
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
