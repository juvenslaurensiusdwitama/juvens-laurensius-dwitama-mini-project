import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import endgame from '../../assets/endgame.png'
import childMv from '../../assets/child-mv.png'
import tv from '../../assets/tv.png'

export default function Main() {
    return(
        <main className="flex flex-col items-center gap-[100px] pt-[100px] pb-[215px]">
            <div className='flex items-center gap-[355px]'>
                <img src={endgame} alt="endGame" className='w-[406px] h-[604px]'/>
                <div className="max-w-[482px]">
                    <h1 className="font-semibold text-[48px]">Save your favourite movie</h1>
                    <h2 className="text-[32px]">Save feature and like feature are available.</h2>
                </div>
            </div>
            <div className='flex items-center gap-[150px]'>
                <div className="max-w-[547px]">
                    <h1 className="font-semibold text-[48px]">Many rated movies under 18+ for children</h1>
                    <h2 className="text-[32px]">List of movies rated under 18+ is available.</h2>
                </div>
                <img src={childMv} alt="childMovie" className='w-[546px] h-[415px]'/>
            </div>
            <div className='flex items-center gap-[161px]'>
                <img src={tv} alt="tv" className='w-[610px] h-[514px]'/>
                <div className="max-w-[471px]">
                    <h1 className="font-semibold text-[48px]">Online movie list</h1>
                    <h2 className="text-[32px]">Available on web application.</h2>
                </div>
            </div>
            <div className='flex items-center gap-[164px]'>
                <div className="max-w-[477px]">
                    <h1 className="font-semibold text-[48px]">Online movie list</h1>
                    <h2 className="text-[32px]">Available on web application.</h2>
                </div>
                <div className="flex gap-[27px]">
                    <img src={profile1} alt="profile" className="w-[182px] h-[198px]"/>
                    <img src={profile2} alt="profile" className="w-[182px] h-[198px]"/>
                    <img src={profile3} alt="profile" className="w-[182px] h-[198px]"/>
                </div>
            </div>
        </main>
    )
};
