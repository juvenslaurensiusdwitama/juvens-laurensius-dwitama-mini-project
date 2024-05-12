import { useState } from 'react'
import save from '../assets/save-icon.png'
import profile from '../assets/user-icon.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(true)
    function handleLogout(){
        sessionStorage.removeItem('isLogin')
        navigate('/login')
    }
    console.log(isHidden)
    return(
        <nav className='flex justify-between px-[50px] pt-[17px] max-lg:flex-col
        max-lg:items-center max-lg:gap-[20px] max-lg:pb-[15px] sticky top-0 bg-[#020510]
        z-10'>
            <div className='flex gap-[40px] items-center max-lg:flex-col max-lg:gap-[5px]'>
                <Link to={'/'}>
                    <h1 className='movie-verse text-[44px] font-semibold cursor-pointer'
                    >MovieVerse</h1>
                </Link>
                <ul className='flex gap-[50px] text-[18px]'>
                    <Link to={'/'}>
                        <li className='transition-[150ms] cursor-pointer hover:opacity-[0.7]'>Home</li>
                    </Link>
                    <Link to={'/movies'}>
                        <li className='transition-[150ms] cursor-pointer hover:opacity-[0.7]'>Movies</li>
                    </Link>
                </ul>
            </div>
            <div className='flex gap-[38px] items-center'>
                <Link to={'/saved'}>
                    <img src={save} alt="save" className='w-[20px] h-[20px] 
                    transition-[150ms] hover:scale-[1.1] hover:opacity-[0.6] cursor-pointer'
                    />
                </Link>
                <div className='relative'>
                    <img src={profile} alt="profile"  className='w-[32px] h-[32px] 
                    transition-[150ms] hover:scale-[1.03] hover:opacity-[0.6] cursor-pointer'
                    onClick={() => setIsHidden(!isHidden)}/>
                    <button className={`${isHidden? "hidden" : "absolute"} right-0 top-[38px] bg-[#D40509] py-1 px-2 rounded-sm
                    hover:opacity-[0.8] transition-[150ms]`} onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    )
};
