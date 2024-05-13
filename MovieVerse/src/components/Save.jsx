import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import save from '../assets/save-icon.png'
import saved from '../assets/saved.png'
import axios from 'axios'

export default function Save({details, setIsLoading}) {
    const URL = `${import.meta.env.VITE_REACT_API_MOCK}/saved/`
    const [id, setId] = useState('')
    const [status, setStatus] = useState(false)

    useEffect(()=>{
        getLikedMovies()
    },[])

    async function getLikedMovies(){
        try{
            const response = await axios.get(URL)
            if(response.data.length > 0){
                response.data.forEach(item => {
                    if(item.imdbID === details.imdbID){
                        setId(item.id)
                        setStatus(item.status)
                    }
                })
            }
        }catch(err){
            console.error(err)
        }
    }

    async function handleClick(){
        if(!status){
            try{
                setIsLoading(true)
                await axios.post(URL,{...details, status: true})
            }catch(err){
                console.error(err)
            }
            finally{
                setIsLoading(false)
                Swal.fire({
                    title: 'Saved!',
                    text: 'Press OK to continue',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        }else{
            setStatus(false)
            try{
                await axios.delete(URL+id)
            }catch(err){
                console.error(err)
            }
        }
    }
    return (
        <img src={status? saved : save} alt="save" 
        className='w-[20px] h-[20px] transition-[150ms] hover:opacity-[0.6] cursor-pointer' onClick={handleClick}/>
    )
};
