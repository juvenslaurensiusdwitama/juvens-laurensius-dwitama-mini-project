import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Main from "./Main";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DetailMovie() {
    const {id} = useParams()
    const URL = import.meta.env.VITE_REACT_API_URL
    const API_KEY = import.meta.env.VITE_REACT_API_KEY
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetchDetails()
        console.log(details)
    },[])

    async function fetchDetails(){
        try{
            const response = await axios.get(`${URL}i=${id}${API_KEY}`)
            // setDetails(response.data)
            // console.log(response.data)
        }catch(err){
            console.error(err)
        }
    }

    return(
        <div className="bg-[#020510] text-[#FFFFFF]">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
};
