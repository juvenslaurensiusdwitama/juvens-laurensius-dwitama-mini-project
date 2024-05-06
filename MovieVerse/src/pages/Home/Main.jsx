import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import endgame from '../../assets/endgame.png'
import childMv from '../../assets/child-mv.png'
import tv from '../../assets/tv.png'

export default function Main() {
    return(
        <main className="flex flex-col items-center gap-[100px] pt-[100px] pb-[215px]">
            <div className='flex items-center gap-[355px] max-2xl:gap-[255px] max-xl:gap-[155px]'>
                <img src={endgame} alt="endGame" className='w-[406px] h-[604px] max-2xl:w-[336px] max-2xl:h-[504px]
                max-xl:w-[256px] max-xl:h-[404px]'/>
                <div className="max-w-[482.5px] max-2xl:max-w-[420px]">
                    <h1 className="font-semibold text-[48px] max-2xl:text-[40px] max-xl:text-[36px]">Save your favourite movie</h1>
                    <h2 className="text-[32px] max-2xl:text-[24px] max-xl:text-[20px]">Save feature and like feature are available.</h2>
                </div>
            </div>
            <div className='flex items-center gap-[150px] max-2xl:gap-[50px] max-xl:gap-[40px]'>
                <div className="max-w-[547px] max-2xl:max-w-[485px] max-xl:max-w-[418px]">
                    <h1 className="font-semibold text-[48px] max-2xl:text-[40px] max-xl:text-[36px]">Many rated movies under 18+ for children</h1>
                    <h2 className="text-[32px] max-2xl:text-[24px] max-xl:text-[20px]">List of movies rated under 18+ is available.</h2>
                </div>
                <img src={childMv} alt="childMovie" className='w-[546px] h-[415px] max-2xl:w-[446px] max-2xl:h-[335px]
                max-xl:w-[346px] max-xl:h-[255px]'/>
            </div>
            <div className='flex items-center gap-[161px] max-2xl:gap-[111px] max-xl:gap-[60px]'>
                <img src={tv} alt="tv" className='w-[610px] h-[514px] max-2xl:w-[510px] max-2xl:h-[414px]
                max-xl:w-[410px] max-xl:h-[314px]'/>
                <div className="max-w-[471.5px]">
                    <h1 className="font-semibold text-[48px] max-2xl:text-[40px] max-xl:text-[36px]">Online movie list</h1>
                    <h2 className="text-[32px] max-2xl:text-[24px] max-xl:text-[20px]">Available on web application.</h2>
                </div>
            </div>
            <div className='flex items-center gap-[164px] max-2xl:gap-[136px] max-xl:gap-[35px]'>
                <div className="max-w-[477px] max-2xl:max-w-[420px]">
                    <h1 className="font-semibold text-[48px] max-2xl:text-[40px] max-xl:text-[36px]">Premium Feature</h1>
                    <h2 className="text-[32px] max-2xl:text-[24px] max-xl:text-[20px]">Register to access our save and like feature</h2>
                </div>
                <div className="flex gap-[27px]">
                    <img src={profile1} alt="profile" className="w-[182px] h-[198px] max-2xl:w-[120px] max-2xl:h-[128px]
                    max-xl:w-[100px] max-xl:h-[108px]"/>
                    <img src={profile2} alt="profile" className="w-[182px] h-[198px] max-2xl:w-[120px] max-2xl:h-[128px]
                    max-xl:w-[100px] max-xl:h-[108px]"/>
                    <img src={profile3} alt="profile" className="w-[182px] h-[198px] max-2xl:w-[120px] max-2xl:h-[128px]
                    max-xl:w-[100px] max-xl:h-[108px]"/>
                </div>
            </div>
        </main>
    )
};
