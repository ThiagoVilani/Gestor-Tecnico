// import {clients.index} from '@/routes';
import NewClientForm from "@/components/ui/clients/form-new-client"
import ListClients from "@/components/ui/clients/list-clients"
import { LucideAArrowDown } from 'lucide-react';


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
    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Clientes
                </h1>
            </div>
            <div>
                  <ListClients clients={clients}/>  
            </div>
            {/* El form de cliente es para cuando tenga el boton */}
            {/* <NewClientForm/> */}
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