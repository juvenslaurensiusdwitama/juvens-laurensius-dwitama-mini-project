import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Main from "./Main";
import Header from "./Header";

export default function Movies() {
    return(
        <div className="bg-[#020510] text-[#FFFFFF]">
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};
