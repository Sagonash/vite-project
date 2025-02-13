import Logo from '@/images/logo.svg'
import Adv from '@/images/adv.png'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Post from '@/components/Post'
import { Button } from '@/components/ui/button'
import axios from 'axios';

const Reader_post = () => {

    // const tmp = () => {
    //     axios.get('https://cpt-stage-2.duckdns.org/api/posts',{
    //         headers:{
    //             Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    //         }
    //     })
    //     .then(function(response){
    //         console.log(response)
    //         console.log(response.data)
    //         console.log(response.data[0].authorId)
    //         // axios.get('https://cpt-stage-2.duckdns.org/api/users/me',{
    //         //     'id': response.data[0].authorId
    //         // })
    //         // .then(function(response){
    //         //     console.log(response)
    //         // })
    //         // .catch(function(error){
    //         //     console.log('error')
    //         //     console.log(error)
    //         // })
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    // }

    return(
        <div className='bg-slate-50'>
            <header className='flex justify-between items-center h-20 w-3/4 m-auto mb-12'>
                <img src={Logo} alt="Logo"></img>
                <div className='flex items-center'>
                    <p className='font-normal leading-6 text-sm text-baseColor mr-3'>pochta@gmail.com</p>
                    <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                </div>
            </header>
            <section className='w-3/4 m-auto flex flex-row justify-center'>
                <SidebarProvider className='w-52 sticky top-0 h-screen'>
                    <AppSidebar />
                </SidebarProvider>
                <div className='space-y-[72px]'>
                    <Post/>
                    <Post/>
                </div>
                <img className='h-36 ml-[32px]' src={Adv} alt='Advert'></img>
            </section>
            {/* <Button onClick={tmp}>postlist</Button> */}
        </div>
    )
}

export default Reader_post;