import checkIcon from '../../assets/checkIcon.png'
export default function Comments() {
    return(
        <>
            <div className="flex flex-col items-start mt-[60px]">
                <h1 className="text-[24px] mb-[14px]">Comments</h1>
                <div className="flex flex-col gap-[25px]">
                    {/* nanti comment yg udh di post dan di get ditampilin disini.
                    nanti setiap comment di post nambah terus div commentnya.
                    comment yg udh di post bisa diedit/dihapus. */}

                    {/* ini bagian input user */}
                    <div className="p-[16px] bg-[#1D1731] flex gap-[16px] rounded-[16px] items-center">
                        <input type="text" className="w-[791px] h-[133px] bg-[#2A223F] rounded-[16px]
                        p-[16px] outline-none"/>
                        <img src={checkIcon} alt="check" className="w-[25px] h-[25px]"/>
                    </div>
                </div>
            </div>
        </>
    )
};
