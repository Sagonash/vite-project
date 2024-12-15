import Logo from '@/images/logo.svg'
import Adv from '@/images/adv.png'
import { Avatar, AvatarFallback} from "@/components/ui/avatar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Post_write from '@/components/Post_write'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Link } from 'react-router-dom'

const Writer_post = () => {
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
                <div className='space-y-[32px]'>
                    <Menubar className='w-[307px] h-10 rounded'>
                        <MenubarMenu>
                            <MenubarTrigger className='font-customFont text-sm font-medium py-[6px] w-[96px] h-8 ml-0'>
                                <Link to="/Writer_post">Все посты</Link>
                            </MenubarTrigger>
                            <MenubarTrigger className='font-customFont text-sm font-medium py-[6px] w-[100px] h-8 ml-0'>
                                <Link to="/Writer_my_post">Мои посты</Link>
                            </MenubarTrigger>
                            <MenubarTrigger className='font-customFont text-sm font-medium py-[6px] w-[92px] h-8 ml-0'>
                                <Link to="/Writer_draft">Черновики</Link>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                    <Post_write/>
                    <Post_write/>
                </div>
                <img className='h-36' src={Adv} alt='Advert'></img>
            </section>
        </div>
    )
}

export default Writer_post;