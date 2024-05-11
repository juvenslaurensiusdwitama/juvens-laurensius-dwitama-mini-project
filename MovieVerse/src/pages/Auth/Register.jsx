

export default function Register() {
    return(
        <div className="bg-[#341E51] text-white flex flex-col
        justify-center items-center min-h-[100vh] ">
            <h1 className='font-semibold text-[64px] mb-[15px]'>MovieVerse</h1>
            <form onSubmit={''} className='w-[500px] h-[516px] rounded-[15px]
            flex justify-center items-center bg-[#151315]'>
                <div className='flex flex-col items-start'>
                    <h1 className='font-semibold text-[30px] mb-[12px]'>Register</h1>
                    <input type="text" className='text-black mb-[18px] w-[300px] h-[55px] rounded-[10px]
                    px-[20px] outline-0'
                    placeholder='Email'/>
                    <input type="text" className='text-black mb-[27px] w-[300px] h-[55px] rounded-[10px]
                    px-[20px] outline-0'
                    placeholder='Password'/>
                    <input type="submit" className='bg-[#FF2C78] w-[300px] h-[55px] rounded-[10px]
                    cursor-pointer text-[22px] font-medium transition-[150ms] hover:opacity-[0.8]'/>
                </div>
            </form>
        </div>
    )
};
