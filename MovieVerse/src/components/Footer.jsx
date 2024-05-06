import SocialMedia from "./SocialMedia";

export default function Footer() {
    return(
        <footer>
            <div className='flex flex-col items-center gap-[27px] pb-[94px]'>
                <SocialMedia/>
                <h1 className='movie-verse font-semibold text-[25px]'>MovieVerse</h1>
            </div>
        </footer>
    )
};
