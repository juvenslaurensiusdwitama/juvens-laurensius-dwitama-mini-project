import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } from "@google/generative-ai";
import '../Details/detail.css'

export default function AskAI() {
    const [prompt, setPrompt] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

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
            const formattedResponse = formatResponse(responseText);
            setResult(formattedResponse)
            setPrompt("")
            console.log(formattedResponse)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }
    function formatResponse(responseText) {
        const regex = /(\*\*(.*?)\*\*)|([^*]+)/g;
        const matches = responseText.match(regex);
        const formattedText = matches.map((match) => {
        if (match.startsWith("**")) {
            const text = match.replace(/\*/g, "");
            return <p><b>{text}</b></p>;
        } else {
            return <p>{match}</p>;
        }
        });
        return <div>{formattedText}</div>;
    }
    return (
        <div className="bg-[#020510] text-[#FFFFFF]">
            <Navbar />
            <div className="flex flex-col items-center py-6 mb-[150px] ">
                <div className="border-2 border-white">
                    <div className="min-h-[600px] min-w-[700px] bg-blue-950 max-w-[700px]
                    max-h-[600px] overflow-y-auto ">
                        <div className="p-4">
                            {loading ? 
                            <span className="loader"></span> 
                            : 
                            result}
                        </div>
                    </div>
                    <div className="flex flex-col min-w-[700px] max-w-[700px]">
                            <textarea type='text'
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Write your prompt..."
                                className="p-2 text-black min-h-[150px] max-h-[150px]
                                w-full outline-none bg-blue-100"
                            ></textarea>
                            <button onClick={runChat} disabled={loading || prompt.length === 0}
                                className="bg-blue-900 w-full h-[40px]">
                                {loading ? "Generating..." : "Generate"}
                            </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};
