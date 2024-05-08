import { useState } from 'react'
import Swal from 'sweetalert2'
import save from '../assets/save-icon.png'
import saved from '../assets/saved.png'

export default function Save() {
    const [toggle, setToggle] = useState(false)
    function handleClick(){
        setToggle(!toggle)
        if(!toggle){
            Swal.fire({
                title: 'Saved!',
                text: 'Press OK to continue',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }else{
            Swal.fire({
                title: 'Removed from saved!',
                text: 'Press OK to continue',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }
    return (
        <img src={toggle? saved : save} alt="save" 
        className='w-[20px] h-[20px]' onClick={handleClick}/>
    )
};
