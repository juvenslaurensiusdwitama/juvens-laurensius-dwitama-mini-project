import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import endgame from '../../assets/endgame.png'
import childMv from '../../assets/child-mv.png'
import tv from '../../assets/tv.png'

export default function Main() {
    return(
        <main className="flex flex-col items-center gap-[100px] max-lg:gap-[50px] pt-[100px] max-lg:pt-[50px] pb-[215px] max-lg:pb-[115px]">
            <div className='flex items-center gap-[355px] max-2xl:gap-[255px] max-xl:gap-[155px]
            max-lg:gap-[55px]'>
                <img src={endgame} alt="endGame" className='w-[406px] h-[604px] max-2xl:w-[336px] max-2xl:h-[504px]
                max-xl:w-[256px] max-xl:h-[404px] max-lg:w-[200px] max-lg:h-[304px]'/>
                <div className="max-w-[482.5px] max-2xl:max-w-[420px] max-lg:max-w-[320px]">
                    <h1 className="font-semibold text-[48px] max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[30px]">Save your favourite movie</h1>
                    <h2 className="text-[32px] max-2xl:text-[24px] max-xl:text-[20px] max-lg:text-[16px]">Save feature and like feature are available.</h2>
                </div>
            </div>
            <div className='flex items-center gap-[150px] max-2xl:gap-[50px] max-xl:gap-[40px]'>
                <div className="max-w-[547px] max-2xl:max-w-[485px] max-xl:max-w-[418px] max-lg:max-w-[290px]">
                    <h1 className="font-semibold text-[48px] max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[30px]">Many rated movies under 18+ for children</h1>
                    <h2 className="text-[32px] max-2xl:text-[24px] max-xl:text-[20px] max-lg:text-[16px]">List of movies rated under 18+ is available.</h2>
                </div>
                <img src={childMv} alt="childMovie" className='w-[546px] h-[415px] max-2xl:w-[446px] max-2xl:h-[335px]
                max-xl:w-[346px] max-xl:h-[255px] max-lg:w-[245px] max-lg:h-[205px]'/>
            </div>
            <div className='flex items-center gap-[161px] max-2xl:gap-[111px] max-xl:gap-[60px]'>
                <img src={tv} alt="tv" className='w-[610px] h-[514px] max-2xl:w-[510px] max-2xl:h-[414px]
                max-xl:w-[410px] max-xl:h-[314px] max-lg:w-[210px] max-lg:h-[180px]'/>
                <div className="max-w-[471.5px]">
                    <h1 className="font-semibold text-[48px] max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[30px]">Online movie list</h1>
                    <h2 className="text-[32px] max-2xl:text-[24px] max-xl:text-[20px] max-lg:text-[16px]">Available on web application.</h2>
                </div>
            </div>
            <div className='flex items-center gap-[164px] max-2xl:gap-[136px] max-xl:gap-[35px] max-lg:gap-[60px]'>
                <div className="max-w-[477px] max-2xl:max-w-[420px] max-lg:max-w-[330px]">
                    <h1 className="font-semibold text-[48px] max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[30px]">Premium Feature</h1>
                    <h2 className="text-[32px] max-2xl:text-[24px] max-xl:text-[20px] max-lg:text-[16px]">Register to access our save and like feature</h2>
                </div>
                <div className="flex gap-[27px] max-lg:gap-[10px]">
                    <img src={profile1} alt="profile" className="w-[182px] h-[198px] max-2xl:w-[120px] max-2xl:h-[128px]
                    max-xl:w-[100px] max-xl:h-[108px] max-lg:w-[50px] max-lg:h-[58px]"/>
                    <img src={profile2} alt="profile" className="w-[182px] h-[198px] max-2xl:w-[120px] max-2xl:h-[128px]
                    max-xl:w-[100px] max-xl:h-[108px] max-lg:w-[50px] max-lg:h-[58px]"/>
                    <img src={profile3} alt="profile" className="w-[182px] h-[198px] max-2xl:w-[120px] max-2xl:h-[128px]
                    max-xl:w-[100px] max-xl:h-[108px] max-lg:w-[50px] max-lg:h-[58px]"/>
                </div>
            </div>
        </main>
    )
};
