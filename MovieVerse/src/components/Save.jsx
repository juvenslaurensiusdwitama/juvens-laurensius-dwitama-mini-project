import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import save from '../assets/save-icon.png'
import saved from '../assets/saved.png'
import axios from 'axios'

export default function Save({details}) {
    const [isSaved, setIsSaved] = useState(false)
    const URL = `${import.meta.env.VITE_REACT_API_MOCK}/saved/`
    // test
    const [data, setData] = useState([])
    useEffect(()=>{
        getLikedMovies()
    },[])
    async function getLikedMovies(){
        try{
            const response = await axios.get(URL)
            setData(response.data)
        }catch(err){
            console.log(err)
        }
    }
    console.log(data)
    // test
    async function handleClick(){
        setIsSaved(!isSaved)
        if(!isSaved){
            Swal.fire({
                title: 'Saved!',
                text: 'Press OK to continue',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            try{
                await axios.post(URL,{...details})
            }catch(err){
                console.log(err)
            }
        }else{
            try{
                // await axios.delete(URL+details.imdbID)
                Swal.fire({
                    title: 'Removed from saved!',
                    text: 'Press OK to continue',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }catch(err){
                console.log(err)
            }
        }
    }
    return (
        <img src={isSaved? saved : save} alt="save" id={''}
        className='w-[20px] h-[20px]' onClick={handleClick}/>
    )
};
