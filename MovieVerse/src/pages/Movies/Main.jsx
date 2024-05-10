import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import SocialMedia from "../../components/SocialMedia";
import axios from 'axios'
import { useState, useEffect } from "react";

export default function Main() {
    const URL = import.meta.env.VITE_REACT_API_URL
    const API_KEY = import.meta.env.VITE_REACT_API_KEY
    const [result, setResult] = useState('')
    const [movies, setMovies] = useState([])
    // const [isLoading, setIsLoading] = useState()

    useEffect(()=>{
        fetchMovies()
    },[movies])

    async function fetchMovies(){
        try{
            const response = await axios.get(`${URL}s=${result}${API_KEY}`)
            if(response.data.Search){
                setMovies(response.data.Search)
            }else{
                setMovies([])
            }
        }catch(err){
            console.error(err)
        }
    }
    
    return (
        <main className="mx-[50px] mt-[13px] mb-[150px] bg-[#0A031C] 
        pt-[10px] px-[50px] pb-[110px] rounded-[15px] min-h-[65vh]">
            <div>
                <h1 className="font-medium text-[30px] max-md:text-center">Movies</h1>
                <div className="flex justify-between items-center pt-[19px] max-md:flex-col
                max-md:gap-[10px] max-md:text-center max-md:pt-2">
                    <h2 className="max-xl:max-w-[600px] max-lg:max-w-[400px] max-md:max-w-[350px]">MovieVerse list offers more than three thousand films for reference, including new releases and premieres</h2>
                    <SocialMedia/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[10px] py-[50px] max-md:py-[30px]">
                <SearchBar result={result} setResult={setResult}/>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center gap-[66px] flex-wrap max-w-[1397px] max-md:gap-[50px]">
                    {
                        movies.length > 0 ? 
                            movies.map(item =>
                                <Link to={`/movies/${item.imdbID}`} key={item.imdbID}>
                                    <div className="flex flex-col items-center max-w-[250px] gap-[10px]">
                                        {item.Poster === "N/A" ? 
                                            <div className="w-[250px] h-[375px] rounded-[12px] bg-slate-700 flex justify-center items-center 
                                            hover:opacity-[0.7] transition-[150ms] hover:scale-[1.02] cursor-pointer">Photo Not Available</div>
                                            : 
                                            <img src={item.Poster} alt="poster" className="w-[250px] h-[375px] rounded-[12px]
                                            hover:opacity-[0.7] transition-[150ms] hover:scale-[1.02] cursor-pointer"/>
                                        }
                                        <div className="text-center max-w-[240px] hover:opacity-[0.7] cursor-pointer 
                                        transition-[150ms]">
                                            <h1 className="">{item.Title}</h1>
                                            <h2>{item.Year}</h2>
                                        </div>
                                    </div>
                                </Link>
                            )
                            : <h1 className="text-center">No result yet.</h1>
                    }
                </div>
            </div>
        </main>
    )
};
