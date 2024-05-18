import arr from "../../assets/arrow.png"
import fate from '../../assets/fate.png'
import avengers from '../../assets/avengers.png'
import { Link } from "react-router-dom"
export default function Header() {
    return(
        <header className="flex justify-center pt-[8px]">
                <div className="flex justify-center pt-[96px] pb-[80px] bg-[#16073F] rounded-[18px]
                max-xl:pt-[80px] max-xl:pb-[64px] max-lg:pt-[45px] max-lg:pb-[34px] max-sm:bg-transparent max-sm:py-[5px]">
                    <div className="flex flex-col items-start gap-[42px] 
                    ps-[66px] max-2xl:gap-[36px] max-xl:gap-[30px] max-lg:ps-[30px] max-md:gap-[22px]">
                        <h1 className="font-semibold text-[64px]
                        max-w-[747px] max-2xl:text-[48px] max-2xl:max-w-[585px]
                        max-xl:text-[40px] max-xl:max-w-[487px] 
                        max-lg:text-[30px] max-lg:max-w-[350px]
                        max-md:text-[24px] max-md:max-w-[280px] 
                        ">Welcome to your ultimate destination for movie lovers!</h1>
                        <h2 className="text-[32px] font-semibold
                        max-2xl:text-[20px] max-xl:text-[18px] max-md:text-[14px]">All news in one place</h2>
                        <Link to={'/movies'}>
                            <button className="flex gap-[18px] items-center font-semibold text-[20px] bg-[#FF2C78]
                                p-[12px] rounded-[12px] max-2xl:text-[18px] max-xl:text-[16px] max-lg:text-[14px]
                                max-md:text-[12px] max-md:p-[10px] 
                                transition-[150ms] hover:scale-[1.1]">Get Started 
                                <img src={arr} alt="arrow"/>
                            </button>
                        </Link>
                    </div>
                    <div className="flex gap-[15px] pe-[52px] max-lg:pe-[30px] max-sm:hidden">
                        <img src={avengers} alt="" className="h-[440px] w-[310px]
                        max-2xl:h-[340px] max-2xl:w-[210px] max-xl:h-[235px] max-xl:w-[150px]
                        max-lg:w-[135px] max-lg:h-[190px] max-md:hidden"/>
                        <img src={fate} alt="" className="h-[440px] w-[310px] 
                        max-2xl:h-[340px] max-2xl:w-[210px] max-xl:h-[235px] max-xl:w-[150px]
                        max-lg:w-[135px] max-lg:h-[190px]"/>
                    </div>
                </div>
            </header>
    )
};
