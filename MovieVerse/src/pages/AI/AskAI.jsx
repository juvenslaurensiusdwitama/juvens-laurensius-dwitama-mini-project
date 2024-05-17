import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Markdown from 'react-markdown'
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } from "@google/generative-ai";
import '../Details/detail.css'

export default function AskAI() {
    const [prompt, setPrompt] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)
    const templates = {
        questionOne: 'Top 10 movies general recommendations',
        questionTwo: 'Highly-rated drama series on Netflix',
        questionThree: 'Heartwarming movies from ghibli studio',
        questionFour: 'Top 5 thriller/horror movies',
        questionFive: 'Best action movies of all time'
    }

    async function runChat() {
        setLoading(true)
        try {
            const genAI = new GoogleGenerativeAI("AIzaSyDy7yNvGjYg1d78FwhrBQqFaSpbIKbWX08");
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
            const generationConfig = {
                temperature: 1,
                topK: 1,
                topP: 1,
                maxOutputTokens: 1000,
            };
            const safetySettings = [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
            ];
            const chat = model.startChat({
                generationConfig,
                safetySettings,
            });
            const result = await chat.sendMessage(prompt);
            const responseText = result.response.text();
            setResult(responseText)
            setPrompt("")
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    return (
        <div className="bg-[#020510] text-[#FFFFFF]">
            <Navbar />
            <div className="flex justify-center items-start gap-[30px] py-6 mb-[150px] min-h-[70vh]
            max-md:flex-col-reverse max-md:items-center max-md:min-h-[25vh]">
                <div className="border-2 border-white">
                    <div className={`min-h-[600px] min-w-[700px] max-w-[700px] bg-blue-950 
                    max-h-[600px] overflow-y-auto ${loading? 'flex justify-center items-center': false}
                    max-2xl:min-w-[600px] max-2xl:max-w-[600px] max-xl:min-w-[500px] max-xl:max-w-[500px]
                    max-2xl:min-h-[550px] max-2xl:max-h-[550px] max-xl:min-h-[450px] max-xl:max-h-[450px]
                    max-sm:min-h-[250px] max-sm:max-h-[250px] max-sm:min-w-[350px] max-sm:max-w-[350px]
                    `}>
                        {loading ? 
                        <span className="loader"></span> 
                        : 
                        <div className="p-4">
                            <Markdown>
                                {result}
                            </Markdown>
                        </div>}
                    </div>
                    <div className="flex flex-col min-w-[700px] max-w-[700px]
                    max-2xl:min-w-[600px] max-2xl:max-w-[600px] max-xl:min-w-[500px] max-xl:max-w-[500px]
                    max-sm:min-w-[350px] max-sm:max-w-[350px]">
                            <textarea type='text'
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Write your prompt..."
                                className="p-2 text-black min-h-[150px] max-h-[150px]
                                w-full outline-none bg-blue-100"
                            ></textarea>
                            <button onClick={runChat} disabled={loading || prompt.length === 0}
                                className="bg-blue-900 w-full h-[40px] hover:opacity-[0.8]
                                transition-[150ms] cursor-pointer
                                ">
                                {loading ? "Generating..." : "Generate"}
                            </button>
                    </div>
                </div>
                <div className="flex flex-col gap-[15px] max-xl:max-w-[300px]
                max-lg:max-w-[200px] max-md:hidden">
                    <h1 className="text-[28px] 
                    max-lg:text-[18px] max-md:hidden">Templates Question:</h1>
                    <p className="border-2 border-white p-3 hover:bg-blue-900
                    transition-[150px] cursor-pointer" onClick={()=>setPrompt(templates.questionOne)}
                    >{templates.questionOne}</p>
                    <p className="border-2 border-white p-3 hover:bg-blue-900
                    transition-[150px] cursor-pointer" onClick={()=>setPrompt(templates.questionTwo)}
                    >{templates.questionTwo}</p>
                    <p className="border-2 border-white p-3 hover:bg-blue-900
                    transition-[150px] cursor-pointer" onClick={()=>setPrompt(templates.questionThree)}
                    >{templates.questionThree}</p>
                    <p className="border-2 border-white p-3 hover:bg-blue-900
                    transition-[150px] cursor-pointer" onClick={()=>setPrompt(templates.questionFour)}
                    >{templates.questionFour}</p>
                    <p className="border-2 border-white p-3 hover:bg-blue-900
                    transition-[150px] cursor-pointer" onClick={()=>setPrompt(templates.questionFive)}
                    >{templates.questionFive}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
};
