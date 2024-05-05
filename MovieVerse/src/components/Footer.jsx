import ig from '../assets/ig-icon.png'
import twitter from '../assets/twitter-icon.png'
import fb from '../assets/fb-icon.png'
import telegram from '../assets/telegram-icon.png'
export default function Footer() {
    return(
        <footer>
            <div className='flex flex-col items-center gap-[27px] pb-[94px]'>
                <div className='flex gap-[25px]'>
                    <img src={ig} alt="ig" className='h-[24px] w-[24px]'/>
                    <img src={twitter} alt="twitter" className='h-[24px] w-[24px]'/>
                    <img src={fb} alt="fb" className='h-[24px] w-[24px]'/>
                    <img src={telegram} alt="telegram" className='h-[24px] w-[24px]'/>
                </div>
                <h1 className='movie-verse font-semibold text-[25px]'>MovieVerse</h1>
            </div>
        </footer>
    )
};
