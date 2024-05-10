export default function Card({item}) {
    return(
        <div className="py-[18px] px-[24px] rounded-[12px] bg-[#1D1731]">
            <img src={item.Poster} alt="" className="w-[264px] h-[330px] rounded-[12px]"/>
        </div>
    )
};
