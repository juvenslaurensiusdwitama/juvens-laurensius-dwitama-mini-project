import { useState } from 'react'
import Swal from 'sweetalert2'
import like from '../assets/like-icon.png'
import liked from '../assets/liked.png'

export default function Like() {
    const [toggle, setToggle] = useState(false)
    function handleClick(){
        setToggle(!toggle)
        if(!toggle){
            Swal.fire({
                title: 'Liked!',
                text: 'Press OK to continue',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }else{
            Swal.fire({
                title: 'Removed from liked!',
                text: 'Press OK to continue',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }
    return (
        <img src={toggle? liked : like} alt="like" 
        className='w-[25px] h-[25px]' onClick={handleClick}/>
    )
};
