import axios from 'axios'
import { useEffect, useState } from 'react'
import '../Details/detail.css'
import Card from './Card'
import { Link } from 'react-router-dom'
export default function Main() {
    const URL = `${import.meta.env.VITE_REACT_API_MOCK}/saved/`
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        getLikedMovies()
    },[])
    async function getLikedMovies(){
        setIsLoading(true)
        try{
            const response = await axios.get(URL)
            setData(response.data)
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    }
    console.log(data)
    
    return(
        <main className='mt-[13px] mx-[50px] mb-[120px] pt-[30px] px-[50px] pb-[74px] 
        min-h-[60vh] flex flex-col gap-[64px] items-center bg-[#0A031C] rounded-[15px]'>
            <h1 className='mt-[82px] font-semibold text-[40px]'>Saved</h1>
            {isLoading ?
            <div className="min-h-[80vh] flex justify-center items-center">
                <span className="loader mb-5"></span>
            </div>
            :
            <div className='flex flex-wrap justify-start gap-[40px]'>
                {data.length > 0 ?
                data.map(item => 
                    <Card item={item}/>
                )
                :
                <h1 className='font-medium text-[24px]'>no saved movies.</h1>
                }
            </div>}
            <Link to={'/movies'}>
                <button className='py-[12px] px-[20px] rounded-[6px] bg-[#2A223F]'>More Movies</button>
            </Link>
        </main>
    )
};
