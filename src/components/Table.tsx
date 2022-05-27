import Agrup from "../core/Agrup"
import { IconeTrash, IconsEdition } from "./Icons"

interface TableProps {
    agrups: Agrup[]
    agrupSelect?: (agrup: Agrup) => void
    agrupErase?: (agrup: Agrup) => void 
}

export default function Table(props: TableProps) {

    function renderHeader() {
        return(
            <tr>
                <th className="text-left p-4">INICIO/FIM</th>
                <th className="text-left p-4">AGRUPAMENTO</th>
                <th className="text-left p-4">MP</th>
                <th className="text-left p-4">agrupE</th>
                <th className="text-left p-4">START</th>
                {showActions ? <th className="p-4">Actions</th> : false}
            </tr>
        )
    }

    const showActions = props.agrupErase || props.agrupSelect 

    function renderActions(agrup: Agrup) {
        return (
            <td className="text-sm flex">
                {props.agrupSelect ? (
                    <button onClick={() => props.agrupSelect?.(agrup)} className="flex justify-center items-center text-xl">
                        {IconsEdition}
                    </button>
                ) : false }
                {props.agrupErase ? (
                    <button onClick={() => props.agrupErase?.(agrup)} className="flex justify-center items-center text-xl">
                        {IconeTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    function renderData() {
        return props.agrups?.map((Agrup, i) => {
            console.log(Agrup.status);
            return (
                <tr className={`${i % 2 === 0 ? 'bg-purple-400' : 'bg-purple-100'}`} key={Agrup.id}>
                    <td className="text-left p-4 text-3xl">{Agrup.ini_plan}/{Agrup.fim_plan}</td>
                    <td className="text-left p-4 text-3xl">{Agrup.agrup}</td>
                    <td className="text-left p-4 text-3xl">{Agrup.mp}</td>
                    <td className="text-left p-4 text-3xl">{Agrup.agrup}</td>
                    <td className="text-left p-4 text-3xl">{Agrup.status}</td>
                    {showActions ? renderActions(Agrup) : false}
                </tr>
            )
        }) 
    }

    return (
        <table>
            <thead className="bg-gradient-to-r from-purple-500 to-purple-800 w-full rounded-xl overflow-hidden">
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}