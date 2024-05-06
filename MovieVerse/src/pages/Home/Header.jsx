import arr from "../../assets/arrow.png"
import fate from '../../assets/fate.png'
import avengers from '../../assets/avengers.png'
import { Link } from "react-router-dom"
export default function Header() {
    return(
        <header className="flex justify-center pt-[8px]">
                <div className="flex justify-center pt-[96px] pb-[80px] bg-[#16073F] rounded-[18px]
                max-xl:pt-[80px] max-xl:pb-[64px]">
                    <div className="flex flex-col items-start gap-[42px] 
                    ps-[66px] max-2xl:gap-[36px] max-xl:gap-[30px]">
                        <h1 className="font-semibold text-[64px]
                        max-w-[747px] max-2xl:text-[48px] max-2xl:max-w-[585px]
                        max-xl:text-[40px] max-xl:max-w-[487px]">Welcome to your ultimate destination for movie lovers!</h1>
                        <h2 className="text-[32px] font-semibold
                        max-2xl:text-[20px]
                        max-xl:">All news in one place</h2>
                        <Link to={'/movies'}>
                            <button className="flex gap-[18px] items-center font-semibold text-[20px] bg-[#FF2C78]
                                p-[12px] rounded-[12px] max-2xl:text-[18px] max-xl:text-[16px]
                                transition-[150ms] hover:scale-[1.1]">Get Started 
                                <img src={arr} alt="arrow"/>
                            </button>
                        </Link>
                    </div>
                    <div className="flex gap-[15px] pe-[52px]">
                        <img src={avengers} alt="" className="h-[440px] w-[310px]
                        max-2xl:h-[340px] max-2xl:w-[210px] max-xl:h-[275px] max-xl:w-[180px]"/>
                        <img src={fate} alt="" className="h-[440px] w-[310px] 
                        max-2xl:h-[340px] max-2xl:w-[210px] max-xl:h-[275px] max-xl:w-[180px]"/>
                    </div>
                </div>
            </header>
    )
};
