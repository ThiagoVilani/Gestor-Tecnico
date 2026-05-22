import {jobs} from '@/routes';

export default function Jobs() {
    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Trabajos
                </h1>
            </div>
        </>
    )
}


Jobs.layout = {
    breadcrumbs: [
        {
            title: 'Jobs',
            href: jobs(),
        },
    ],
};