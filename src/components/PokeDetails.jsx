import getTypeColorClass from "../script/getColorType.js";

export default function PokeDetails({ image, name, id, description, types, region, height, weight, attack, growthRate, location, evolution }) {
    return (
        <section className="py-10 px-2 sm:px-8 sm:py-20 items-center justify-between cursor-pointer gap-10 flex flex-col sm:flex-row inset-0 backdrop-blur-3xl bg-gray-400/30 dark:bg-white/10 w-3/4 rounded-4xl self-center shadow-2xl shadow-gray-800 mx-auto">
            <div className="flex-1/2">
                <img src={image} className="mx-auto w-40 h-40" />
                <h1 className="text-3xl font-bold capitalize text-center my-3 text-gray-900 dark:text-light-gray">{name}</h1>
                <center>
                    <h3 className="bg-primary-yellow w-fit px-4 rounded-2xl text-white font-bold mb-2">#{id}</h3>
                </center>
                <p className="text-sm italic text-center text-black dark:text-light-gray mb-4">{description}</p>
            </div>
            <div className="flex-1/2 sm:border-l-2 sm:pl-10 w-[98%] space-y-2">
                <p className="flex flex-wrap gap-2 items-center backdrop-blur-2xl bg-white/20 dark:bg-white/10 rounded-2xl px-2.5 py-0.5 text-gray-900 dark:text-light-gray">
                    <strong className="flex items-center text-nowrap"><i className='bx mr-1 bxs-filter'></i>Type:</strong>
                    {types.map((type) => (
                        <span
                            key={type}
                            className={`${getTypeColorClass(type)} px-2 py-0.5 rounded-full text-xs font-bold capitalize`}
                        >
                            {type}
                        </span>
                    ))}
                </p>

                <p className="flex gap-2 backdrop-blur-2xl bg-white/20 dark:bg-white/10 rounded-2xl px-2.5 py-0.5 text-gray-900 dark:text-light-gray">
                    <strong className="flex items-center text-nowrap"><i className='bx mr-1 bx-area'></i> Region:</strong> {region}
                </p>

                <p className="flex gap-2 backdrop-blur-2xl bg-white/20 dark:bg-white/10 rounded-2xl px-2.5 py-0.5 text-gray-900 dark:text-light-gray">
                    <strong className="flex items-center text-nowrap"><i className='bx mr-1 bx-ruler'></i> Height:</strong> {height / 10} M
                </p>

                <p className="flex gap-2 backdrop-blur-2xl bg-white/20 dark:bg-white/10 rounded-2xl px-2.5 py-0.5 text-gray-900 dark:text-light-gray">
                    <strong className="flex items-center text-nowrap"><i className='bx mr-1 bx-dumbbell'></i> Weight:</strong> {weight / 10} KG
                </p>

                <p className="flex gap-2 backdrop-blur-2xl bg-white/20 dark:bg-white/10 rounded-2xl px-2.5 py-0.5 text-gray-900 dark:text-light-gray">
                    <strong className="flex items-center text-nowrap"><i className='bx mr-1 bxs-chess-knight'></i> Attacks:</strong> {attack}
                </p>

                <p className="flex gap-2 backdrop-blur-2xl bg-white/20 dark:bg-white/10 rounded-2xl px-2.5 py-0.5 mb-3 text-gray-900 dark:text-light-gray">
                    <strong className="flex items-center text-nowrap"><i className='bx mr-1 bxs-trending-up'></i> Growth Rate:</strong> {growthRate}
                </p>

                <p className="text-gray-900 dark:text-light-gray"><strong>Location:</strong> {location.join(", ")}</p>
                <p className="text-gray-900 dark:text-light-gray"><strong>Évolution:</strong> {evolution.join(" → ")}</p>
            </div>
        </section>
    );
}
