import Layout from "../src/components/Layout"
import Table from "../src/components/Table"
import Client from "../src/core/clients"
import Button from "../src/components/Button"

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Paulo', 44, '2'),
    new Client('Maria', 37, '3'),
  ]

  function clientSelect(Client: Client) {
    console.log(Client.nome);
  }

  function clientErase(Client:Client) {
    console.log(Client.nome);
  }

  return (
    <div className={`
      flex flex-col justify-center items-center h-screen
      bg-gradient-to-r from-gray-800 to-blue-500
      text-white
    `}>
        <Layout  title="Cadastro Simples" >
          <div className="justify-end">
            <Button className="mb-4 rounded-md "> Novo Cliente</Button>
          </div>
          <Table clients={clients} clientSelect={clientSelect} clientErase={clientErase} ></Table>
        </Layout> 

        <div>

        </div>
    </div>
  )
}
