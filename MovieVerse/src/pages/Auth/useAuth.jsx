import { useState } from "react"

export default function useAuth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleInput(e){
        const {name, value} = e.target
        if(name === 'email'){
            setEmail(value)
        }else if(name === 'password'){
            setPassword(value)
        }
    }
    return {email, password, handleInput}
};
