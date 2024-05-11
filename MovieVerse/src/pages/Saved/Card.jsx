import { Link } from "react-router-dom";

export default function Card({item}) {
    return(
        <Link to={`/movies/${item.imdbID}`}>
            <div className="py-[18px] px-[24px] rounded-[12px] bg-[#1D1731]">
                {item.Poster === "N/A" ?
                    <div className="w-[264px] h-[330px] rounded-[12px] bg-slate-700 flex justify-center items-center
                    ">Photo Not Available</div>
                    :
                <img src={item.Poster} alt="poster" className="w-[264px] h-[330px] rounded-[12px]"/>
                }
            </div>
        </Link>
    )
};
