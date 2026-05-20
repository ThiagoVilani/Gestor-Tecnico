import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import StatsCard from '@/components/ui/statsCard';

export default function Dashboard() {
    return (
        <>  
            <div className="p-6">
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>
            </div>
            <div className="m-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
                    <StatsCard
                        title="Clientes activos"
                        value={28}
                        logoUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZW50JTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                        className="col-span-1 row-span-1"
                    />

                    <StatsCard
                        title="Mapa trabajos"
                        value={32}
                        logoUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2VyJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                        className="md:col-span-2 md:row-span-2 h-100"
                    />
                    <StatsCard
                        title="Trabajos hoy"
                        value={5}
                        logoUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2VyJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                        className="col-span-1 row-span-1"
                    />
                    

                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
