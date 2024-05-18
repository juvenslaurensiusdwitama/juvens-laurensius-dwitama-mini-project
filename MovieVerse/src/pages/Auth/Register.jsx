import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"
import Swal from "sweetalert2"

export default function Register() {
    const {email, password, handleInput} = useAuth('')
    const navigate = useNavigate()
    function handleRegister(e){
        e.preventDefault()
        if(email === '' || password === ''){
            Swal.fire({
                title: "Invalid Data!",
                text: "Please fill all the empty fields.",
                icon: "warning"
            });
        }else{
            Swal.fire({
                title: "Registration successful!",
                text: "Please login to proceed.",
                icon: "success"
            });
            localStorage.setItem('user', JSON.stringify({email,password}))
            navigate('/login')
        }
    }
    return(
        <div className="bg-[#341E51] text-white flex flex-col
        justify-center items-center min-h-[100vh] ">
            <h1 className='font-semibold text-[64px] mb-[15px]
            max-sm:text-[32px]'>MovieVerse</h1>
            <div className='w-[500px] h-[516px] rounded-[15px]
            flex justify-center items-center bg-[#151315]
            max-sm:w-[280px] max-sm:h-[280px]'>
                <form className='flex flex-col items-start' onSubmit={handleRegister}>
                    <h1 className='font-semibold text-[30px] mb-[12px]
                    max-sm:text-[18px]'>Register</h1>
                    <input type="email" className='text-black mb-[18px] w-[300px] h-[55px] rounded-[10px]
                    px-[20px] outline-0 max-sm:w-[200px] max-sm:h-[35px] max-sm:mb-[6px]' value={email} onChange={handleInput}
                    placeholder='Email' name="email"/>
                    <input type="password" className='text-black mb-[27px] w-[300px] h-[55px] rounded-[10px]
                    px-[20px] outline-0 max-sm:w-[200px] max-sm:h-[35px] max-sm:mb-[12px]' value={password} onChange={handleInput}
                    placeholder='Password' name="password"/>
                    <input type="submit" className='bg-[#FF2C78] w-[300px] h-[55px] rounded-[10px]
                    cursor-pointer text-[22px] font-medium transition-[150ms] hover:opacity-[0.8]
                    max-sm:w-[200px] max-sm:h-[35px] max-sm:text-[16px]'/>
                </form>
            </div>
        </div>
    )
};
