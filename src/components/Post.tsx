// import React from 'react'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import CommentButtons from "@/components/CommentButtons";
import { Button } from "@/components/ui/button";

const Post = ({post, btn, btns}) => {

    const imageArray = post.images

    const tmp = () => {
        console.log(post.id)
    }

    let date = new Date(post.createdAt)

    return(
        <div className='w-[768px] bg-white hover:bg-slate-200 rounded-xl space-x-4 space-y-4'>
            <div className='flex items-center justify-start ml-4 pt-4'>
                <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                <div className='flex-col ml-2'>
                    <div className='font-customFont text-sm font-normal leading-6'>{post.authorId}</div>
                    <div className='font-customFont text-slate-400 text-xs font-medium leading-5'>{date.toLocaleDateString('ru-RU', {year: "numeric", month: "long", day: "numeric"})}</div>
                </div>
            </div>
            {/* <Button onClick={tmp}>asdf</Button> */}
            <h4 className='font-customFont text-xl font-semibold'>{post.title}</h4>
            {imageArray.map(image =>
                <img src={image.imageUrl} alt='asf'></img>
            )}
            <p className='font-customFont text-sm font-normal leading-6 text-baseColor'>
                {post.content}
            </p>
            <div className={`${btns}`}>
                <Button className={`bg-baseColor rounded-[6px] font-customFont mr-2 ${btn}`}>Опубликовать пост</Button>
                <Button onClick={tmp} className="bg-slate-100 rounded-[6px] font-customFont text-baseColor hover:bg-slate-200">Редактировать</Button>
            </div>
            <CommentButtons/>
        </div>
    )
}

export default Post;