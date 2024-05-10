import Save from "../../components/Save";
import Comments from "./Comments";

export default function Main({details}) {
    return(
        <main className="pb-[96px] flex flex-col items-center">
            <h1 className="py-[23px] text-center text-[40px]">Movie Details</h1>

            <div className="bg-[#0D0620] p-[34px] flex rounded-[15px] gap-[50px]">
                <div className="flex flex-col gap-[20px]">
                    <img src={details.Poster} alt="poster" className="w-[350px] h-[525px] 
                    rounded-[12px]"/>
                    <div className="flex justify-center items-center gap-[16px]">
                        <h2 className="bg-[#676767] text-center px-[8px] py-[2px]
                        font-semibold text-[12px] rounded-[3px]">{details.imdbRating}</h2>
                        <h2 className="font-medium text-[12px] text-[#9E9E9E]">{details.Year}</h2>
                        <h2 className="font-medium text-[12px] text-[#9E9E9E]">{details.Rated}</h2>
                        <h2 className="font-medium text-[12px] text-[#9E9E9E]">{details.Runtime}</h2>
                    </div>
                </div>
                <div className="max-w-[450px] max-h-[525px] relative">
                    <h1 className="font-medium text-[32px]">{details.Title}</h1>
                    <div className="pt-[20px] flex flex-col gap-[10px]">
                        <div className="flex gap-[25px]">
                            <h2 className="w-[86px] text-[16px] text-[#9E9E9E]">Description:</h2>
                            <p className="w-[350px] text-[16px]">{details.Plot}</p>
                        </div>
                        <div className="flex gap-[25px]">
                            <h2 className="w-[86px] text-[16px] text-[#9E9E9E]">Genres:</h2>
                            <p className="w-[350px] text-[16px]">{details.Genre}</p>
                        </div>
                        <div className="flex gap-[25px]">
                            <h2 className="w-[86px] text-[16px] text-[#9E9E9E]">Type:</h2>
                            <p className="w-[350px] text-[16px]">{details.Type}</p>
                        </div>
                        <div className="flex gap-[25px]">
                            <h2 className="w-[86px] text-[16px] text-[#9E9E9E]">Director:</h2>
                            <p className="w-[350px] text-[16px]">{details.Director}</p>
                        </div>
                        <div className="flex gap-[25px]">
                            <h2 className="w-[86px] text-[16px] text-[#9E9E9E]">Actors:</h2>
                            <p className="w-[350px] text-[16px]">{details.Actors}</p>
                        </div>
                    </div>
                    <div className="flex items-center absolute bottom-0 right-0">
                        <Save details={details}/>
                    </div>
                </div>
            </div>
            <Comments details={details}/>
            <button className="mt-[94px] bg-[#2A223F] py-[14px] px-[28px] rounded-[7px]
            font-medium text-[24px]">Show more movies</button>
        </main>
    )
};
