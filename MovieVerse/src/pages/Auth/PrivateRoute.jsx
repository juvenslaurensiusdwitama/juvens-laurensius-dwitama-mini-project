import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
    const isLogin = sessionStorage.getItem('isLogin')
    if(!isLogin){
        return <Navigate to={'/login'}/>
    }else{
        return <Outlet/>
    }
};
