import Client from "../core/clients"
import { IconeTrash, IconsEdition } from "./Icons"

interface TableProps {
    clients: Client[]
    clientSelect?: (client: Client) => void
    clientErase?: (client: Client) => void 
}

export default function Table(props: TableProps) {

    function renderHeader() {
        return(
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions ? <th className="p-4">Actions</th> : false}
            </tr>
        )
    }

    const showActions = props.clientErase || props.clientSelect 

    function renderActions(client: Client) {
        return (
            <td className="text-sm flex">
                {props.clientSelect ? (
                    <button onClick={() => props.clientSelect?.(client)} className="flex justify-center items-center text-xl">
                        {IconsEdition}
                    </button>
                ) : false }
                {props.clientErase ? (
                    <button onClick={() => props.clientErase?.(client)} className="flex justify-center items-center text-xl">
                        {IconeTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    function renderData() {
        return props.clients?.map((Client, i) => {
            return (
                <tr className={`${i % 2 === 0 ? 'bg-purple-400' : 'bg-purple-100'}`} key={Client.id}>
                    <td className="text-left p-4 text-3xl">{Client.id}</td>
                    <td className="text-left p-4 text-3xl">{Client.nome}</td>
                    <td className="text-left p-4 text-3xl">{Client.idade}</td>
                    {showActions ? renderActions(Client) : false}
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