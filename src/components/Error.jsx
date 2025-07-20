import { Link } from "react-router-dom"


export default function Error({title, content}){
    return (
        <center className="py-30 cursor-pointer inset-0 backdrop-blur-3xl bg-gray-400/30 w-[50vw] rounded-4xl mx-auto ">
            <h1 className="font-bold text-6xl mb-15">{title}</h1>
            <h3>{content}</h3>
            <Link to="/" >
                <button className="bg-primary-red/50 inset-0 backdrop-blur-3xl text-white py-6 px-8 my-8 rounded-4xl cursor-pointer active:scale-95 transition-transform shadow-md">
                    Go Back to HomePage
                </button>
            </Link>
        </center>
    )
}