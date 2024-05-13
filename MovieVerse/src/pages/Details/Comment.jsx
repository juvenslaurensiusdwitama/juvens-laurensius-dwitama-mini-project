import axios from "axios"
import { useState } from "react"
export default function Comment({item, apiMockURL}) {
    const [isEdited, setIsEdited] = useState(false)
    const [editValue, setEditValue] = useState(item.comment)
    async function editComment(e){
        const {id} = e.target
        setIsEdited(!isEdited)
        if(isEdited){
            try{
                await axios.put(`${apiMockURL}/comments/${id}`,{...item, comment : editValue})
            }catch(err){
                console.error(err)
            }finally{
                location.reload()
            }
        }
    }
    async function deleteComment(e){
        const {id} = e.target
        try{
            await axios.delete(`${apiMockURL}/comments/${id}`)
        }catch(err){
            console.error(err)
        }finally{
            location.reload()
        }
    }
    return(
        <div className='bg-[#1D1731] text-[15px] p-[16px] rounded-[16px] flex items-center gap-[16px]'>
            {/* kasih ternary logic klo lagi di edit ubah ke input,
                kalo udah di confirm balik lagi */}
            {isEdited?
            <input type="text" className="w-[791px] h-[133px] bg-[#2A223F] rounded-[16px]
            p-[16px] outline-none"
            value={editValue} onChange={(e) => setEditValue(e.target.value)}
            />
            :
            <div className='p-[16px] w-[791px] h-[133px] text-[15px]'>
                {item.comment}
            </div>
            }
            <div className='flex flex-col gap-[16px]'>
                <img src={isEdited? item.checkIcon : item.pencilIcon} alt="pencilIcon" id={item.id} className='w-[25px] h-[25px]
                hover:opacity-[0.6] transition-[150ms] hover:cursor-pointer'
                onClick={editComment}
                />
                <img src={item.trashIcon} alt="trashIcon" id={item.id} className='w-[25px] h-[22px]
                hover:opacity-[0.6] transition-[150ms] hover:cursor-pointer'
                onClick={deleteComment}
                />
            </div>
        </div>
    )
};
