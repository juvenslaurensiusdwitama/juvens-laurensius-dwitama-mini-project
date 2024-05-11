import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import save from '../assets/save-icon.png'
import saved from '../assets/saved.png'
import axios from 'axios'

export default function Save({details, setIsLoading}) {
    const URL = `${import.meta.env.VITE_REACT_API_MOCK}/saved/`
    const [id, setId] = useState('')
    const [status, setStatus] = useState(save)
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
            console.log(err)
        }
    }
    console.log(id)
    async function handleClick(){
        if(status === save){
            try{
                setIsLoading(true)
                await axios.post(URL,{...details, status: saved})
            }catch(err){
                console.log(err)
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
            Swal.fire({
                title: 'Removed from saved!',
                text: 'Press OK to continue',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            setStatus(save)
            try{
                await axios.delete(URL+id)
            }catch(err){
                console.log(err)
            }
        }
    }
    return (
        <img src={status} alt="save" 
        className='w-[20px] h-[20px]' onClick={handleClick}/>
    )
};
