import {clients} from '@/routes';

export default function Clients() {
    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Clientes
                </h1>
            </div>
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