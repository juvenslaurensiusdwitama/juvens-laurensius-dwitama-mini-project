import searchIcon from '../assets/search.png'
export default function SearchBar({result, setResult}) {
    return(
        <>
            <h1 className='font-medium text-[24px]'>Search</h1>
            <div className='relative h-[36px] w-[234px] bg-white rounded-[5px] 
            py-[6px] px-[10px]'>
                <input type="text" value={result} onChange={(e)=> setResult(e.target.value)} 
                placeholder='title' className="text-[#858484] h-[24px] w-[192px]
                outline-none text-[16px]"/>
                <img src={searchIcon} alt="search" className='text-[#858484] 
                w-[12px] h-[12px] absolute top-[12px] left-[212px]'/>
            </div>
        </>
    )
};
