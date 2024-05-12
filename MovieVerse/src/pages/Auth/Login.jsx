import { Link, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

export default function Login() {
    const userData = JSON.parse(localStorage.getItem('user'))
    const {email, password, handleInput} = useAuth('')
    const navigate = useNavigate()
    function handleLogin(e){
        e.preventDefault()
        if(email === '' || password === ''){
            Swal.fire({
                title: "Invalid Data!",
                text: "Please fill all the empty fields.",
                icon: "warning"
            });
        }else if(userData.email === email && userData.password === password){
            sessionStorage.setItem('isLogin', true)
            navigate('/')
        }else{
            Swal.fire({
                title: "Invalid Email or Password!",
                text: "Please check your email and password.",
                icon: "error"
            });
        }
    }
    console.log()
    return(
        <div className="bg-[#341E51] text-white flex flex-col
        justify-center items-center min-h-[100vh] ">
            <h1 className='font-semibold text-[64px] mb-[15px]'>MovieVerse</h1>
            <form onSubmit={handleLogin} className='w-[500px] h-[516px] rounded-[15px]
            flex justify-center items-center bg-[#151315]'>
                <div className='flex flex-col items-start'>
                    <h1 className='font-semibold text-[30px] mb-[12px]'>Login</h1>
                    <input type="email" className='text-black mb-[18px] w-[300px] h-[55px] rounded-[10px]
                    px-[20px] outline-0' value={email} onChange={handleInput}
                    placeholder='Email' name="email"/>
                    <input type="password" className='text-black mb-[27px] w-[300px] h-[55px] rounded-[10px]
                    px-[20px] outline-0' value={password} onChange={handleInput}
                    placeholder='Password' name="password"/>
                    <Link to={'/register'}>
                        <h2 className="mb-[14px] text-[15px] underline">Create Account</h2>
                    </Link>
                    <input type="submit" className='bg-[#FF2C78] w-[300px] h-[55px] rounded-[10px]
                    cursor-pointer text-[22px] font-medium transition-[150ms] hover:opacity-[0.8]'/>
                </div>
            </form>
        </div>
    )
};
