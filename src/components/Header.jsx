export default function Header() {
    return (
        <>
            <div className="bg-primary-red text-primary-white px-4 py-4 rounded-2xl flex row justify-between cursor-pointer shadow-lg">
                <h1 className='font-bold text-2xl '>Pokédex</h1>
                <div className="flex row justify-around items-center bg-primary-white text-primary-red w-52 px-2.5 rounded-md ">
                    <i className='bx bx-search text-primary-red text-2xl cursor-pointer'></i>
                    <input type="search" name="search" className="grid w-36 h-9 bg-transparent outline-none border-none text-primary-red font-semibold" placeholder="Search" />
                </div>
            </div>
        </>
    )
}

