export default function SetOffsetButton({ offset, setOffset }) {
    return (
        <>
            <center className="">
                <button
                    onClick={() => setOffset(prev => Math.max(prev - 10, 0))}
                    className=" bg-primary-red mx-2.5 p-3 py-1 rounded-2xl cursor-pointer active:scale-95"
                >
                    <i className='bxr  bx-skip-previous text-primary-white text-3xl mt-1.5'  ></i>
                </button>

                <button
                    onClick={() => setOffset(prev => prev + 10)}
                    className="bg-primary-red mx-2.5 p-3 py-1 rounded-2xl cursor-pointer active:scale-95 transition-transform shadow-md"
                >
                    <i className='bxr bx-skip-next text-primary-white text-3xl mt-1.5'></i>
                </button>
            </center>
        </>
    );
}
