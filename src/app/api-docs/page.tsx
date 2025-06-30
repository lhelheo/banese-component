export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            API Documentation
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Autenticação
              </h2>
              <p className="text-gray-600 mb-4">
                Todas as requisições
                devem incluir um token
                de autorização no
                header:
              </p>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                Authorization: Bearer
                demo-token-123
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Endpoints
              </h2>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    GET
                  </span>
                  <code className="text-lg font-mono">
                    /api/projects
                  </code>
                </div>

                <p className="text-gray-600 mb-4">
                  Retorna todos os
                  projetos sociais
                  cadastrados.
                </p>

                <h4 className="font-semibold text-gray-800 mb-2">
                  Exemplo de Resposta:
                </h4>
                <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                  {`{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Educação Digital",
      "description": "Projeto para ensinar programação...",
      "thematicArea": "Educação",
      "startDate": "2024-01-15",
      "createdAt": "2024-01-10T10:00:00Z"
    }
  ],
  "total": 1
}`}
                </pre>

                <h4 className="font-semibold text-gray-800 mb-2 mt-4">
                  Códigos de Status:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <code>200</code> -
                    Sucesso
                  </li>
                  <li>
                    <code>401</code> -
                    Token de autorização
                    inválido ou ausente
                  </li>
                  <li>
                    <code>500</code> -
                    Erro interno do
                    servidor
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Exemplo de Uso
              </h2>
              <div className="bg-gray-100 p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  {`curl -X GET "https://your-domain.com/api/projects" \\
  -H "Authorization: Bearer demo-token-123" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
