// import React from 'react'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import CommentButtons from "@/components/CommentButtons";
import { Button } from "@/components/ui/button";
import { client } from "@/components/api"
import { Link } from 'react-router-dom'

const Post = ({post, distribute, redact, close, ...props}) => {

    const imageArray = post.images

    const Open = () => {
        redact(post.id, post.title, post.content, post.images)
    }

    const date = new Date(post.createdAt)

    const updateStatus = () => {
        client.patch(`${client.defaults.baseURL}/posts/${post.id}/status`,{
            status: "published"
        })
        .then(response => {
            console.log(response)
            distribute()
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return(
        <div className='w-[768px] pb-4 bg-white hover:bg-slate-200 rounded-xl space-x-4 space-y-4 overflow-auto'>
            <div className='flex items-center justify-start ml-4 pt-4'>
                <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                <div className='flex-col ml-2'>
                    <div className='font-customFont text-sm font-normal leading-6'>{post.authorId}</div>
                    <div className='font-customFont text-slate-400 text-xs font-medium leading-5'>{date.toLocaleDateString('ru-RU', {year: "numeric", month: "long", day: "numeric"})}</div>
                </div>
            </div>
            {/* <Button onClick={tmp}>asdf</Button> */}
            <h4 className='font-customFont text-xl font-semibold'>{post.title}</h4>
            {imageArray?.map(image =>
                <img src={image.imageUrl} alt='img'></img>
            )}
            <p className='font-customFont text-sm font-normal leading-6 text-baseColor'>
                {post.content}
            </p>
            <div className={`${props.btns}`}>
                <Button onClick={updateStatus} className={`bg-baseColor rounded-[6px] font-customFont mr-2 ${props.btn}`}>Опубликовать пост</Button>
                <Button onClick={Open} className="bg-slate-100 rounded-[6px] font-customFont text-baseColor hover:bg-slate-200">Редактировать</Button>
            </div>
            <CommentButtons/>
            <Button className={`${props.about} bg-slate-50 text-baseColor font-customFont font-medium text-xs leading-5 h-7 hover:bg-slate-200 rounded-[3px]`}>
                <Link to={"/Posts/" + post.id}>Подробнее</Link>
            </Button>
        </div>
    )
}

export default Post;