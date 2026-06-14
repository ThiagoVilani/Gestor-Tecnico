type Client = {
    id: number,
    name: string,
    email: string,
    phone: string,
    address: string
}

interface Props {
    clients: Client[]
}

export default function ListClients({clients}: Props) {
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-mauve-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefono</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                    </tr>
                </thead>
                <tbody className="bg-zinc-900 divide-y divide-zinc-800">
                    {clients.map(client => (
                        <tr key={client.id}
                        >
                            <td className="px-6 py-4 whitespace-nowrap">{client.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{client.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{client.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{client.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
