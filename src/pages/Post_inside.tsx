import React, { useState } from "react";
import { useParams } from "react-router-dom"
import Logo from '@/images/logo.svg'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import Adv from '@/images/adv.png'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Post from '@/components/Post'
import { client } from '@/components/api'

const Post_inside = () => {

    const params = useParams();
    const [post, setPost] = useState('')
    const [mail, setMail] = useState('')

    React.useEffect(() => {
        client.get(`${client.defaults.baseURL}/posts`)
        .then(response => {
            setPost(
                response.data.find(item => 
                    item.id === parseInt(params.id)
                )
            )
        })
        .catch(error => {
            console.log(error)
        })
        client.get(`${client.defaults.baseURL}/users/me`)
        .then(response => {
            setMail(response.data.email)
        })
    }, [])

    return (
        <div className='w-full h-full bg-slate-50'>
            <header className='flex justify-between items-center h-20 w-[1248px] m-auto mb-12'>
                <img src={Logo} alt="Logo"></img>
                <div className='flex items-center'>
                    <p className='font-normal leading-6 text-sm text-baseColor mr-3'>{mail}</p>
                    <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                </div>
            </header>
            <section className='w-[1248px] m-auto flex flex-row justify-center space-x-8'>
                <SidebarProvider className='w-52 sticky top-0 h-screen'>
                    <AppSidebar />
                </SidebarProvider>
                <div>
                    <Post post={post} btn='hidden' btns='hidden' about='hidden'/>
                </div>
                <img className='h-36 ml-[32px] mt-[72px]' src={Adv} alt='Advert'></img>
            </section>
        </div>
    )
}

export default Post_inside