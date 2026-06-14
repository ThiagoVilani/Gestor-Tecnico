import { useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import { LucideBaby } from 'lucide-react';

export default function NewClientForm() {

    const {data, setData, post, reset, processing} = useForm({
        name:"",
        phone:"",
        email:"",
        address:""
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/clients/new', {
            onSuccess: () => {
                reset()
                alert("Guardado");
            }
        });
    };


    return (
        <form onSubmit={submit} className='bg-gray-950 flex flex-col bg-gray-800 h-70 justify-center items-center'>
            <div className=' grid grid-cols-2 grid-rows-2'>
                <div className="input-content flex flex-col">
                    <label>Nombre</label>
                    <input 
                        className='bg-gray-900 rounded-md w-30'
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name",e.target.value)}
                    />
                </div>
    
                <div className="input-content flex flex-col">
                    <label>Email</label>
                    <input
                        className='bg-gray-900 rounded-md w-30'
                        type="text"
                        value={data.email}
                        onChange={(e) => setData("email",e.target.value)}
                    />
                </div>

                <div className="input-content flex flex-col">
                    <label>Direccion</label>   
                    <input
                        className='bg-gray-900 rounded-md w-30'
                        type="text"
                        value={data.address}
                        onChange={(e) => setData("address",e.target.value)}
                    />
                </div>

                <div className="input-content flex flex-col">
                    <label>Telefono</label>
                    <input
                        className='bg-gray-900 rounded-md w-30'
                        type="text"
                        value={data.phone}
                        onChange={(e) => setData("phone",e.target.value)}
                    />
                </div>
            </div>


            <button 
                type="submit" 
                className='bg-gray-900 w-50 rounded-md'
                disabled={processing}    
            >
                {processing ? "Guardando..." : "Guardar cliente"}
            </button>

        </form>
    );
}