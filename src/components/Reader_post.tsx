import Logo from '@/images/logo.svg'
import Adv from '@/images/adv.png'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Post from '@/components/Post'

const Reader_post = () => {
    return(
        <div>
            <header className='flex justify-between items-center h-20 w-3/4 m-auto'>
                <img src={Logo} alt="Logo"></img>
                <div className='flex items-center'>
                    <p className='font-normal leading-6 text-sm text-baseColor mr-3'>pochta@gmail.com</p>
                    <Avatar><AvatarFallback className='font-customFont'>CN</AvatarFallback></Avatar>
                </div>
            </header>
            <section className='w-3/4 m-auto flex flex-row justify-between'>
                <SidebarProvider className='w-52 sticky top-0 h-[872px]'>
                    <AppSidebar />
                </SidebarProvider>
                <div className='space-y-[72px]'>
                    <Post/>
                    <Post/>
                </div>
                <img className='h-36' src={Adv} alt='Advert'></img>
            </section>
        </div>
    )
}

export default Reader_post;