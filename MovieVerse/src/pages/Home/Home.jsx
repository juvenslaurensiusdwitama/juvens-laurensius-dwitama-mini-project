import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
    return (
        <div className="bg-[#020510] text-[#FFFFFF]">
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
};
