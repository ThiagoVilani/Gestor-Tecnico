import {quotes} from '@/routes';

export default function Quotes() {
    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Presupuestos
                </h1>
            </div>
        </>
    )
}


Quotes.layout = {
    breadcrumbs: [
        {
            title: 'Quotes',
            href: quotes(),
        },
    ],
};