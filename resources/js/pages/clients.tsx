import {clients} from '@/routes';
import NewClientForm from "@/components/ui/form-new-client"
export default function Clients() {
    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Clientes
                </h1>
            </div>
            <NewClientForm/>
        </>
    )
}


Clients.layout = {
    breadcrumbs: [
        {
            title: 'Clients',
            href: clients(),
        },
    ],
};