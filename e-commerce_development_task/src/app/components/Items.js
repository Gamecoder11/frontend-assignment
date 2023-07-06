import Link from 'next/link'

export default function Items({info}){
    
    return(
        <div className=" border-2 rounded-md broder-slate-50 p-4 mb-12 hover:drop-shadow-md hover:scale-110 hover:bg-slate-100" key={info.id}>
            <Link href={`/Products/${info.id}`}>
            <div className="w-2/3 h-2/3"><img className="w-screen h-fit" src={`${info.image}`}/></div>
            <h1 className="font-semibold text-xl">{info.title}</h1>
            <h2 className="font-medium italic text-xl">${info.price}</h2>
            </Link>
        </div>
    )
}