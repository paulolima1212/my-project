import Layout from "../src/components/Layout"
import Table from "../src/components/Table"
import Button from "../src/components/Button"
import Agrup from "../src/core/Agrup"

export default function Home() {


  const agrups = []

  const loadAgrup = async (data) => {
      const dados = data[0]["agrupamentos"]
      for (var i=0; i<dados.length; i++) {
          agrups.push(new Agrup(dados[i].id, dados[i].agrup, dados[i].mp, dados[i].agrup, dados[i].ini_plan, dados[i].fim_plan, dados[i].leg_cor, dados[i].leg_font, 
            dados[i].start, dados[i].status, dados[i].nagrup, dados[i].tcorte, dados[i].data, dados[i].maq))
      }
  }

  // Carrega e envia o arquivo JSON para tratamento

  const jsonData= require('../src/files/json/LASER_5040.json');
  loadAgrup(jsonData)


  function agrupSelect(Agrup: Agrup) {
    console.log(Agrup.agrup);
  }

  function agrupErase(Agrup:Agrup) {
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
          <Table agrups={agrups} agrupSelect={agrupSelect} agrupErase={agrupErase} ></Table>
        </Layout> 

        <div>

        </div>
    </div>
  )
}
