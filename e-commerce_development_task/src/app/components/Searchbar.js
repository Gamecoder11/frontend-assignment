"use client"
import {BsSearch} from 'react-icons/bs'
import React from 'react';


export default function Searchbar(){
    // const [query,setQuery]= React.useState("")
    // const result=data?.map(info=>info.title.toLowerCase().includes(query));
    // console.log(result)

    return(
            <>
                <div className="p-4 bg-slate-200 flex flex-row justify-center">
                    <button className="flex flex-row items-center text-zinc-800 font-bold bg-white p-1 rounded-md">
                        <div className='m-2'><BsSearch/></div> 
                        <div><input type="search" id="q" placeholder="Search Here ..." className='focus:outline-none' onChange={e=>setQuery(e.target.value)} /></div>
                    </button>
                </div>    
            </>
    )
}

