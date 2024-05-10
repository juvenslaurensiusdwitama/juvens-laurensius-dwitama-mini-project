import { useState } from 'react'
import Swal from 'sweetalert2'
import save from '../assets/save-icon.png'
import saved from '../assets/saved.png'
import axios from 'axios'

export default function Save({details}) {
    const [toggle, setToggle] = useState(false)
    const URL = `${import.meta.env.VITE_REACT_API_MOCK}/saved/`
    async function handleClick(){
        setToggle(!toggle)
        if(!toggle){
            try{
                await axios.post(URL,details)
                Swal.fire({
                    title: 'Saved!',
                    text: 'Press OK to continue',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
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
        <img src={toggle? saved : save} alt="save" 
        className='w-[20px] h-[20px]' onClick={handleClick}/>
    )
};
