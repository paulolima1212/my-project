import Layout from "../src/components/Layout"
import Table from "../src/components/Table"
import Button from "../src/components/Button"
import Agrup from "../src/core/Agrup"

export default function Home() {


  const agrups = []

  const loadAgrup = async (data) => {
      const dados = data[0]["agrupamentos"]
      for (var i=0; i<dados.length; i++) {
          agrups.push(new Agrup(dados[i].id, dados[i].agrup, dados[i].mp, dados[i].client, dados[i].ini_plan, dados[i].fim_plan, dados[i].leg_cor, dados[i].leg_font, 
            dados[i].start, dados[i].status, dados[i].nagrup, dados[i].tcorte))
      }
  }

  // Carrega e envia o arquivo JSON para tratamento

  const jsonData= require('../src/files/json/LASER_5040_TM.json');
  loadAgrup(jsonData)


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
        <Layout  title="AGRUPAMENTO LASER 5040" >
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
