import logo from '@/assets/images/construction.jpg';


type StatsCardProps = {
    title: string;
    value: number;
    logoUrl: string;
    className: string;
};

export default function StatsCard({title,value,logoUrl,className}: StatsCardProps) {
    return (
        <div
            className={`
                relative
                rounded-2xl
                overflow-hidden
                p-5
                text-white
                ${className}
            `}
            style={{
                backgroundImage: `url(${logoUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/55"></div>

            <div className="relative z-10">
                <h2 className="text-xl font-bold">{title}</h2>

                <p className="text-3xl font-bold">
                    {value}
                </p>
            </div>
        </div>
    );
}