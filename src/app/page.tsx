import {
  Plus,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-background w-full h-screen">
      <div className="flex">
        <Users className="w-12 h-12 text-primary" />
        <p className="text-primary text-2xl font-bold">
          Projetos Sociais
        </p>
      </div>
      <div>
        <p className="text-secondary text-lg mt-4">
          Gerencie e acompanhe projetos
          sociais de forma simples e
          organizada. Cadastre novos
          projetos e visualize todos os
          projetos em andamento.
        </p>
      </div>
      <div className="border border-black/10 bg-white max-w-md p-4 rounded-lg mt-6">
        <form className="flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-2">
            <Plus className="w-6 h-6 text-primary" />
            <p className="text-primary text-xl font-semibold">
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
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Descreva o projeto"
              rows={3}
            />
          </div>
          <div className="flex items-center gap-4">
            <div>
              <label
                className="block text-sm font-medium text-primary mb-1"
                htmlFor="area"
              >
                Área Temática
              </label>
              <select
                id="area"
                name="area"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
            <div>
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
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
          >
            Cadastrar Projeto
          </button>
        </form>
      </div>
    </div>
  );
}
