import {clients} from '@/routes';

export default function Clients() {
    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Clientes
                </h1>
            </div>
            <div>
                <form>
                    <h2>Nuevo Cliente</h2>
                    <label>Nombre</label>
                    <input className="name"></input>
                    <label>Telefono</label>
                    <input className="phone"></input>
                    <label>Email</label>
                    <input className="email"></input>
                    <label>Direccion</label>
                    <input className="adress"></input>
                    <button className="btn-send">Agregar</button>
                </form>

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