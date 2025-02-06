import Logo from '@/images/logo.svg'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import Adv from '@/images/adv.png'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Post_write from '@/components/Post_write'

const Writer_post = () => {
    return(
        <div className='bg-slate-50'>
            <header className='flex justify-between items-center h-20 w-3/4 m-auto mb-12'>
                <img src={Logo} alt="Logo"></img>
                <div className='flex items-center'>
                    <p className='font-normal leading-6 text-sm text-baseColor mr-3'>pochta@gmail.com</p>
                    <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                </div>
            </header>
            <section className='w-3/4 m-auto flex flex-row justify-center space-x-8'>
                <SidebarProvider className='w-52 sticky top-0 h-screen'>
                    <AppSidebar />
                </SidebarProvider>
                <div className='space-y-6'>
                    <MenuBar/>
                    <Post_write/>
                    <Post_write/>
                </div>
                <img className='h-36 ml-[32px] mt-[72px]' src={Adv} alt='Advert'></img>
            </section>
        </div>
    )
}

export default Writer_post;