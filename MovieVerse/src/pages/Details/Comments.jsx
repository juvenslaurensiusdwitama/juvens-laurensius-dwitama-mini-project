import { useEffect, useState } from 'react'
import checkIcon from '../../assets/checkIcon.png'
import axios from 'axios'
import Comment from './Comment'
export default function Comments({details}) {
    const apiMockURL = import.meta.env.VITE_REACT_API_MOCK
    const [comment, setComment] = useState('') 
    const [data, setData] = useState([])
    useEffect(()=>{
        getComments()
    },[])
    async function postComment(){
        const newComment = {
            imdbID: details.imdbID,
            comment: comment,
        }
        setComment('')
        try{
            await axios.post(`${apiMockURL}/comments`, newComment)
        }catch(err){
            console.error(err)
        }finally{
            location.reload()
        }
    }
    async function getComments(){
        try{
            const response = await axios.get(`${apiMockURL}/comments`)
            setData(response.data)
        }catch(error){
            console.error(error)
        }
        
    }
    
    return(
        <>
            <div className="flex flex-col items-start mt-[60px] mb-[94px]">
                <h1 className="text-[24px] mb-[14px]">Comments</h1>
                <div className="flex flex-col gap-[25px]">
                    {data.map(item => {
                            if(item.imdbID === details.imdbID){
                                return <Comment item={item} apiMockURL={apiMockURL} 
                                comment={comment}/>   
                            }
                        }
                    )}
                    <div className="p-[16px] bg-[#1D1731] flex gap-[16px] rounded-[16px] items-center">
                        <input type="text" className="w-[791px] h-[133px] bg-[#2A223F] rounded-[16px]
                        p-[16px] outline-none"
                        value={comment} onChange={(e) => setComment(e.target.value)}
                        />
                        <img src={checkIcon} alt="check" className="w-[25px] h-[25px] hover:opacity-[0.6] transition-[150ms] hover:cursor-pointer"
                        onClick={postComment}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};
