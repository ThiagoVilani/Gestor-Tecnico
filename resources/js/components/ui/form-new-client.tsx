//Creo que las props no van en este componente
type FormNewClientProps = {
    name: string;
    email: string;
    phone: string;
    adress: string;
};

export default function FormNewClient({name,email,phone,adress}: FormNewClientProps) {
    return (
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
    )
}