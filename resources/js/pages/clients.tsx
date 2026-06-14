// import {clients.index} from '@/routes';
import NewClientForm from "@/components/ui/clients/form-new-client"
import ListClients from "@/components/ui/clients/list-clients"
import { LucideAArrowDown } from 'lucide-react';
import { useState } from "react";

interface Client {
    id: number,
    name: string,
    email: string,
    phone: string,
    address: string
}

interface Props {
    clients: Client[]
}

export default function Clients({clients}: Props) {
    
    const [view, setView] = useState("list");
    
    return (
        <>
            {view === 'list' && (
                <>
                    <div className="p-6 flex flex-row justify-between items-center">
                        <h1 className="text-3xl font-bold">
                            Clientes
                        </h1>
                        <button 
                            onClick={() => setView('create')}
                            className="px-4 py-2 bg-mauve-600 text-white rounded hover:bg-mauve-700 transition-colors"
                            >
                            New Client
                        </button>
                    </div>
                    <ListClients clients={clients} />
                </>
            )}
            {view === 'create' && (
                <>
                    <div className="p-6 flex flex-row justify-between items-center">
                        <h1 className="text-3xl font-bold">
                            Clientes
                        </h1>
                        <button 
                            onClick={() => setView('list')}
                            className="px-4 py-2 bg-mauve-600 text-white rounded hover:bg-mauve-700 transition-colors"
                        >
                            Back
                        </button>
                    </div>
                    <NewClientForm />
                </>
            )}
        </>
    )
}


Clients.layout = {
    breadcrumbs: [
        {
            title: 'Clients',
            href: '/clients',
        },
    ],
};