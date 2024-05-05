import like from '../assets/like-icon.png'
import save from '../assets/save-icon.png'
import profile from '../assets/user-icon.png'

export default function Navbar() {
    return(
        <nav className='flex justify-between px-[50px] pt-[17px]'>
            <div className='flex gap-[40px] items-center'>
                <h1 className='movie-verse text-[44px] font-semibold
                transition-[150ms] hover:opacity-[0.8] cursor-pointer'
                >MovieVerse</h1>
                <ul className='flex gap-[50px] text-[18px]'>
                    <li className='transition-[150ms] cursor-pointer hover:opacity-[0.7]'>Home</li>
                    <li className='transition-[150ms] cursor-pointer hover:opacity-[0.7]'>Movies</li>
                    <li className='transition-[150ms] cursor-pointer hover:opacity-[0.7]'>Top 5</li>
                    <li className='transition-[150ms] cursor-pointer hover:opacity-[0.7]'>About Us</li>
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
