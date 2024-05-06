import ig from '../assets/ig-icon.png'
import twitter from '../assets/twitter-icon.png'
import fb from '../assets/fb-icon.png'
import telegram from '../assets/telegram-icon.png'

export default function SocialMedia() {
    return(
        <div className='flex gap-[25px]'>
            <img src={ig} alt="ig" className='h-[24px] w-[24px]'/>
            <img src={twitter} alt="twitter" className='h-[24px] w-[24px]'/>
            <img src={fb} alt="fb" className='h-[24px] w-[24px]'/>
            <img src={telegram} alt="telegram" className='h-[24px] w-[24px]'/>
        </div>
    )
};
