import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Main from "./Main";

export default function DetailMovie() {
    const {id} = useParams()
    console.log(id)
    return(
        <div className="bg-[#020510] text-[#FFFFFF]">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
};
