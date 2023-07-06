
export async function generateStaticParams() {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    const paths = data.map(info=>({id:`${info.id}`}))
    return paths
  }
   
  async function getPost(params) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.Details}`)
    const info = await res.json()
   
    return info
  }
   
  

export default async function Details({params}){
    const info= await getPost(params)
    return(
        <div>
            <div className="p-4 flex  justify-around flex-col items-center " key={info.id}>
                <div className="w-2/5 h-1/5"><img className="border-2 rounded-md broder-slate-50 p-4" src={`${info.image}`}/></div>
                <div className="flex flex-col justify-center">
                    <h1 className="font-semibold text-4xl text-red-700">{info.title}</h1>
                    <h2 className="font-medium italic text-xl">${info.price}</h2>
                    <p className="font-medium italic text-xl text-blue-700">{info.description}</p>
                </div>
            </div>
        </div>
    )
}