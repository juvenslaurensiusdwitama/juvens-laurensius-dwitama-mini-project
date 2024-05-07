import like from '../assets/like-icon.png'
import save from '../assets/save-icon.png'
import profile from '../assets/user-icon.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav className='flex justify-between px-[50px] pt-[17px] max-lg:flex-col
        max-lg:items-center max-lg:gap-[20px] max-lg:pb-[15px]'>
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
                    <li className='transition-[150ms] cursor-pointer hover:opacity-[0.7]'>Top 5</li>
                </ul>
            </div>
            <div className='flex gap-[38px] items-center'>
                <img src={like} alt="like" className='w-[23px] h-[23px] 
                transition-[150ms] hover:scale-[1.13] hover:opacity-[0.6] cursor-pointer'/>
                <img src={save} alt="save" className='w-[20px] h-[20px] 
                transition-[150ms] hover:scale-[1.1] hover:opacity-[0.6] cursor-pointer'/>
                <img src={profile} alt="profile"  className='w-[32px] h-[32px] 
                transition-[150ms] hover:scale-[1.03] hover:opacity-[0.6] cursor-pointer'/>
            </div>
        </nav>
    )
};
