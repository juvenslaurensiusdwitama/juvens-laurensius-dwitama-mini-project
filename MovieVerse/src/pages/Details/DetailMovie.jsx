import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Main from "./Main";
import axios from "axios";
import './detail.css'
import { useState, useEffect } from "react";

export default function DetailMovie() {
    const {id} = useParams()
    const URL = import.meta.env.VITE_REACT_API_URL
    const API_KEY = import.meta.env.VITE_REACT_API_KEY
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetchDetails() 
    },[])
    
    async function fetchDetails(){
        try{
            const response = await axios.get(`${URL}i=${id}${API_KEY}`)
            setDetails(response.data)
        }catch(err){
            console.error(err)
        }
        finally{
            setIsLoading(false)
        }
    }

    return(
        <div className="bg-[#020510] text-[#FFFFFF]">
            <Navbar/>
            {isLoading ? 
                <div className="min-h-[90vh] flex justify-center items-center">
                    <span className="loader"></span>
                </div>
                :<Main details={details}/>
            }
            <Footer/>
        </div>
    )
};
