import Layout from "../src/components/Layout"
import Table from "../src/components/Table"
import Button from "../src/components/Button"
import Agrup from "../src/core/Agrup"

export default function Home() {

  const agrups = [
    new Agrup("13","AG-2022200014","304L-2.5MM-ESM-G220-","322", "16:45", "20:00", "15773696", "0", " ", false, "2022200014", 3.25),
    new Agrup("14", "AG-2022190079", "AL-5754", "210", "20:00", "00:00", "15773696", "0", " ", false, "2022190079", 4)  
  ]

  function clientSelect(Agrup: Agrup) {
    console.log(Agrup.agrup);
  }

  function clientErase(Agrup:Agrup) {
    console.log(Agrup.agrup);
  }

  return (

    <div className={`
    flex flex-col justify-center items-center h-screen
    bg-gradient-to-r from-gray-800 to-blue-500
    text-white
    `}>
        <Layout  title="Cadastro Simples" >
          <div className="justify-end">
            <Button className="mb-4 rounded-md">Operador</Button>
          </div>
          <Table agrups={agrups} clientSelect={clientSelect} clientErase={clientErase} ></Table>
        </Layout> 

        <div>

        </div>
    </div>
  )
}
