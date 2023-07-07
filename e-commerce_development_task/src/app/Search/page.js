"use client"
import {BsSearch} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'

import Link from 'next/link';

import React from 'react';
import useSWR from 'swr'
import SearchResult from '../components/SearchResult';

const fetcher = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    return data
}

export default function Searchbar(){
    const {data , error}=useSWR('dataLoaded',fetcher)
    const [query,setQuery]= React.useState("")
    let result
    if(query)
      {result = data?.filter(info=>info.title.toLowerCase().includes(query.toLowerCase()));}
    
    return(
            <>
                <div className='fixed z-10 w-screen'>
                    <div className='flex flex-col'>
                        <div className='bg-slate-300'>
                            <div className="p-4 flex flex-row justify-center items-center">
                                <div><Link href={'/'}><div className='bg-white p-1 rounded-md' ><AiFillHome size={32}/></div></Link></div>
                                <button className="flex flex-row items-center text-zinc-800 font-bold bg-white p-1 rounded-md ml-12">
                                    <div className='m-2'><BsSearch/></div> 
                                    <div><input type="search" id="q" placeholder="Search Here ..." className='focus:outline-none' onChange={e=>setQuery(e.target.value)} /></div>
                                </button>
                            </div>
                        </div>
                        <div className='relative flex justify-center'>
                            {result && <SearchResult data={result}/>}
                        </div>
                    </div>
                </div>
            </>
    )
}

